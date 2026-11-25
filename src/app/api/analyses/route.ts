
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const analyses = await prisma.analysis.findMany({
      orderBy: {
        createdAt: "desc"
      }
    });

    return NextResponse.json({
      success: true,
      total: analyses.length,
      analyses
    });
  } catch (error) {
    console.error("Erreur API analyses:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Impossible de récupérer les analyses."
      },
      { status: 500 }
    );
  }
}
