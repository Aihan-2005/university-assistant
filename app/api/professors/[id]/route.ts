import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const DATA_FILE = path.join(process.cwd(), 'data', 'professors.json');

// خواندن داده‌ها از فایل
function readProfessors() {
  try {
    const data = fs.readFileSync(DATA_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const professors = readProfessors();
    const professor = professors.find((p: any) => p.id === params.id);

    if (!professor) {
      return NextResponse.json(
        { error: 'استاد یافت نشد' },
        { status: 404 }
      );
    }

    return NextResponse.json(professor);
  } catch (error) {
    return NextResponse.json(
      { error: 'خطا در دریافت اطلاعات استاد' },
      { status: 500 }
    );
  }
}
