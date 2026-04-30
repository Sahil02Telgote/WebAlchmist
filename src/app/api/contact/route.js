import { NextResponse } from 'next/server';
import connectMongo from '../../../lib/mongodb';
import Submission from '../../../models/Submission';

export async function POST(request) {
  try {
    const body = await request.json();
    
    // Connect to database if URI is provided, otherwise just mock success for UI
    const db = await connectMongo();
    
    if (db) {
      const newSubmission = await Submission.create(body);
      return NextResponse.json({ success: true, data: newSubmission }, { status: 201 });
    } else {
      // Mock success for development without MongoDB configured yet
      console.log('Mock submission received:', body);
      return NextResponse.json({ success: true, message: 'Mock submission successful (no DB configured)' }, { status: 201 });
    }
  } catch (error) {
    console.error('Error creating submission:', error);
    return NextResponse.json({ success: false, error: 'Failed to create submission' }, { status: 400 });
  }
}
