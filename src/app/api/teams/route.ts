
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const teams = await prisma.team.findMany({
      orderBy: {
        name: "asc"
      }
    });

    return NextResponse.json({
      success: true,
      total: teams.length,
      teams
    });
  } catch (error) {
    console.error("Erreur API équipes:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Impossible de récupérer les équipes."
      },
      { status: 500 }
    );
  }
}
