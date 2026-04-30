import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const filePath = searchParams.get('path');

  if (!filePath) {
    return new NextResponse('Path is required', { status: 400 });
  }

  try {
    // Read the file from the absolute path
    const fileBuffer = fs.readFileSync(filePath);
    
    // Determine content type (simple check for demo)
    const ext = path.extname(filePath).toLowerCase();
    let contentType = 'image/png';
    if (ext === '.jpg' || ext === '.jpeg') contentType = 'image/jpeg';
    if (ext === '.webp') contentType = 'image/webp';

    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=86400',
      },
    });
  } catch (error) {
    console.error('Error reading image:', error);
    return new NextResponse('Image not found', { status: 404 });
  }
}
