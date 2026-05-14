import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { DaySchedule } from '@/types/professorsType';

const schedulesPath = path.join(process.cwd(), 'data', 'schedules.json');

// خواندن schedules از فایل
function getSchedules(): Record<string, DaySchedule[]> {
  try {
    const data = fs.readFileSync(schedulesPath, 'utf-8');
    return JSON.parse(data);
  } catch {
    return {};
  }
}

// ذخیره schedules در فایل
function saveSchedules(schedules: Record<string, DaySchedule[]>) {
  fs.writeFileSync(schedulesPath, JSON.stringify(schedules, null, 2), 'utf-8');
}

// GET: دریافت برنامه هفتگی استاد
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const schedules = getSchedules();

  // اگر برنامه‌ای برای این استاد وجود نداره، یک برنامه خالی برمی‌گردونیم
  if (!schedules[id]) {
    const emptySchedule: DaySchedule[] = [
      { day: 'شنبه', isPresent: false, timeSlots: [] },
      { day: 'یکشنبه', isPresent: false, timeSlots: [] },
      { day: 'دوشنبه', isPresent: false, timeSlots: [] },
      { day: 'سه‌شنبه', isPresent: false, timeSlots: [] },
      { day: 'چهارشنبه', isPresent: false, timeSlots: [] },
      { day: 'پنجشنبه', isPresent: false, timeSlots: [] },
      { day: 'جمعه', isPresent: false, timeSlots: [] },
    ];
    
    return NextResponse.json(emptySchedule);
  }

  return NextResponse.json(schedules[id]);
}

// POST: ذخیره برنامه هفتگی استاد
export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const schedule: DaySchedule[] = await request.json();

  const schedules = getSchedules();
  schedules[id] = schedule;
  saveSchedules(schedules);

  return NextResponse.json({ success: true, schedule });
}
