import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const results = await prisma.match.findMany({
      where: {
        status: "finished"
      },
      orderBy: {
        kickoff: "desc"
      }
    });

    return NextResponse.json({
      success: true,
      total: results.length,
      results
    });
  } catch (error) {
    console.error("Erreur API résultats:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Impossible de récupérer les résultats."
      },
      { status: 500 }
    );
  }
}

