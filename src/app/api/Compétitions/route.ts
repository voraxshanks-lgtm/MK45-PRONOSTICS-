
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const competitions = await prisma.championship.findMany({
      orderBy: {
        name: "asc"
      }
    });

    return NextResponse.json({
      success: true,
      total: competitions.length,
      competitions
    });
  } catch (error) {
    console.error("Erreur API compétitions:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Impossible de récupérer les compétitions."
      },
      { status: 500 }
    );
  }
}

