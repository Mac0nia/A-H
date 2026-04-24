import { NextResponse } from 'next/server';

// Optional: mark as Node runtime for server-side fetch
export const runtime = 'nodejs';

// Shape of the response we send to the client
type PublicReview = {
  author_name?: string;
  profile_photo_url?: string;
  rating?: number;
  relative_time_description?: string;
  text?: string;
};

type GoogleDetailsResponse = {
  result?: {
    reviews?: Array<{
      author_name?: string;
      profile_photo_url?: string;
      rating?: number;
      relative_time_description?: string;
      text?: string;
    }>;
  };
  status?: string;
  error_message?: string;
};

export async function GET() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return NextResponse.json(
      { error: 'Missing GOOGLE_PLACES_API_KEY or GOOGLE_PLACE_ID' },
      { status: 500 }
    );
  }

  const params = new URLSearchParams({
    place_id: String(placeId),
    fields: 'reviews,rating,user_ratings_total',
    key: String(apiKey),
    reviews_no_translations: 'true',
  });

  const url = `https://maps.googleapis.com/maps/api/place/details/json?${params.toString()}`;

  try {
    const res = await fetch(url, { cache: 'no-store' });
    if (!res.ok) {
      return NextResponse.json(
        { error: `Upstream error: ${res.status}` },
        { status: 502 }
      );
    }

    const data = (await res.json()) as GoogleDetailsResponse;

    if (data.status && data.status !== 'OK') {
      return NextResponse.json(
        { error: data.error_message || `Google API status: ${data.status}` },
        { status: 502 }
      );
    }

    const reviews: PublicReview[] = (data.result?.reviews || []).map((r) => ({
      author_name: r.author_name,
      profile_photo_url: r.profile_photo_url,
      rating: r.rating,
      relative_time_description: r.relative_time_description,
      text: r.text,
    }));

    return NextResponse.json({ reviews });
  } catch (err: unknown) {
    return NextResponse.json(
      { error: (err as Error).message || 'Unknown error' },
      { status: 500 }
    );
  }
}
