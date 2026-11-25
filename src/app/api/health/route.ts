
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    success: true,
    application: "MK45 PRONOSTICS",
    service: "API",
    status: "online",
    version: "1.0.0",
    timestamp: new Date().toISOString()
  });
}
