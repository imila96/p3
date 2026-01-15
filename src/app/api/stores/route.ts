import { NextRequest, NextResponse } from 'next/server';

// Mock data - Replace with actual database queries
const stores = [
  {
    id: 1,
    name: 'Index 101',
    url: 'index101.com',
    type: 'Custom Template',
    featured: true,
  },
  {
    id: 2,
    name: 'Index 101',
    url: 'index101.com',
    type: 'Custom Template',
    featured: true,
  },
  // Add more stores...
];

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const featured = searchParams.get('featured');

    let filteredStores = stores;

    if (featured === 'true') {
      filteredStores = stores.filter(store => store.featured);
    }

    return NextResponse.json({
      success: true,
      data: filteredStores,
      count: filteredStores.length
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch stores' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Here you would typically insert into your database
    // For now, we'll just return success
    
    return NextResponse.json({
      success: true,
      message: 'Store created successfully',
      data: { ...body, id: stores.length + 1 }
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to create store' },
      { status: 500 }
    );
  }
}
