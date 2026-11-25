import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const [
      totalMatches,
      finishedMatches,
      upcomingMatches,
      totalTeams,
      totalCompetitions,
      totalAnalyses
    ] = await Promise.all([
      prisma.match.count(),
      prisma.match.count({
        where: { status: "finished" }
      }),
      prisma.match.count({
        where: { status: "scheduled" }
      }),
      prisma.team.count(),
      prisma.championship.count(),
      prisma.analysis.count()
    ]);

    return NextResponse.json({
      success: true,
      stats: {
        totalMatches,
        finishedMatches,
        upcomingMatches,
        totalTeams,
        totalCompetitions,
        totalAnalyses
      }
    });
  } catch (error) {
    console.error("Erreur statistiques:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Impossible de récupérer les statistiques."
      },
      { status: 500 }
    );
  }
}

