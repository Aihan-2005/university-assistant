import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const SCHEDULE_FILE = path.join(process.cwd(), 'data', 'schedules.json');

// خواندن برنامه‌ها از فایل
function readSchedules() {
  try {
    const data = fs.readFileSync(SCHEDULE_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    return {};
  }
}

// نوشتن برنامه‌ها در فایل
function writeSchedules(schedules: any) {
  const dir = path.dirname(SCHEDULE_FILE);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(SCHEDULE_FILE, JSON.stringify(schedules, null, 2));
}

// برنامه پیش‌فرض خالی
const DEFAULT_SCHEDULE = [
  { day: 'شنبه', dayEn: 'saturday', isPresent: false, timeSlots: [] },
  { day: 'یکشنبه', dayEn: 'sunday', isPresent: false, timeSlots: [] },
  { day: 'دوشنبه', dayEn: 'monday', isPresent: false, timeSlots: [] },
  { day: 'سه‌شنبه', dayEn: 'tuesday', isPresent: false, timeSlots: [] },
  { day: 'چهارشنبه', dayEn: 'wednesday', isPresent: false, timeSlots: [] },
  { day: 'پنجشنبه', dayEn: 'thursday', isPresent: false, timeSlots: [] },
  { day: 'جمعه', dayEn: 'friday', isPresent: false, timeSlots: [] },
];

// GET: دریافت برنامه هفتگی استاد
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const schedules = readSchedules();
    const professorSchedule = schedules[params.id] || DEFAULT_SCHEDULE;

    return NextResponse.json(professorSchedule);
  } catch (error) {
    return NextResponse.json(
      { error: 'خطا در دریافت برنامه هفتگی' },
      { status: 500 }
    );
  }
}

// PUT: ذخیره برنامه هفتگی استاد
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    const { schedule } = body;

    const schedules = readSchedules();
    schedules[params.id] = schedule;
    writeSchedules(schedules);

    return NextResponse.json({ success: true, schedule });
  } catch (error) {
    return NextResponse.json(
      { error: 'خطا در ذخیره برنامه هفتگی' },
      { status: 500 }
    );
  }
}
