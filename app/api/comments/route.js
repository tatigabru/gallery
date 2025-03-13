import { saveComment } from '@/lib/comments';
import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const data = await request.json();
        const result = await saveComment(data);
        
        if (result.success) {
            return NextResponse.json({ success: true });
        } else {
            return NextResponse.json(
                { success: false, error: result.error },
                { status: 400 }
            );
        }
    } catch (error) {
        return NextResponse.json(
            { success: false, error: 'Server error' },
            { status: 500 }
        );
    }
} 