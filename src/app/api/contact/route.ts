import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, name, message } = body;

    // Validate input
    if (!email || !name) {
      return NextResponse.json(
        { success: false, error: 'Email and name are required' },
        { status: 400 }
      );
    }

    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification
    // 3. Add to CRM system
    
    // For now, we'll just return success
    console.log('Contact form submission:', { email, name, message });

    return NextResponse.json({
      success: true,
      message: 'Thank you for contacting us! We\'ll be in touch soon.'
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to submit contact form' },
      { status: 500 }
    );
  }
}
