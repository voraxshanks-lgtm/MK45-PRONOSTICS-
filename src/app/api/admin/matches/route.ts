
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      homeTeam,
      awayTeam,
      competition,
      kickoff
    } = body;

    if (!homeTeam || !awayTeam || !kickoff) {
      return NextResponse.json(
        {
          success: false,
          message: "Les équipes et la date sont obligatoires."
        },
        { status: 400 }
      );
    }

    const match = await prisma.match.create({
      data: {
        homeTeam,
        awayTeam,
        competition: competition || null,
        kickoff: new Date(kickoff),
        status: "scheduled"
      }
    });

    return NextResponse.json(
      {
        success: true,
        message: "Rencontre créée.",
        match
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Erreur création rencontre:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Impossible de créer la rencontre."
      },
      { status: 500 }
    );
  }
}
