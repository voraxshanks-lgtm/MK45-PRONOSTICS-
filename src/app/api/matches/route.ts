
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const matches = await prisma.match.findMany({
      orderBy: {
        kickoff: "asc"
      }
    });

    return NextResponse.json({
      success: true,
      total: matches.length,
      matches
    });
  } catch (error) {
    console.error("Erreur API matches:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Impossible de récupérer les rencontres."
      },
      { status: 500 }
    );
  }
}
