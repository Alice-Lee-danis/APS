import { NextResponse } from 'next/server';
import docs from '../../docs'

export async function GET() {
    return NextResponse.json(docs.struct);
}