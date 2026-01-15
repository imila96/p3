import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { success: false, error: 'Valid email is required' },
        { status: 400 }
      );
    }

    // Here you would typically:
    // 1. Save to database
    // 2. Add to email marketing service (like Mailchimp, SendGrid, etc.)
    
    console.log('Newsletter subscription:', email);

    return NextResponse.json({
      success: true,
      message: 'Successfully subscribed to newsletter!'
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to subscribe' },
      { status: 500 }
    );
  }
}
