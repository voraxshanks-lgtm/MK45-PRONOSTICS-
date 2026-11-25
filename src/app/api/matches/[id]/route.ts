
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

type Context = {
  params: Promise<{ id: string }>;
};

export async function GET(
  request: Request,
  { params }: Context
) {
  try {
    const { id } = await params;

    const match = await prisma.match.findUnique({
      where: { id }
    });

    if (!match) {
      return NextResponse.json(
        {
          success: false,
          message: "Rencontre introuvable."
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      match
    });
  } catch (error) {
    console.error("Erreur récupération match:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Erreur lors de la récupération."
      },
      { status: 500 }
    );
  }
}
