
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { title, content } = body;

    if (
      typeof title !== "string" ||
      typeof content !== "string" ||
      !title.trim() ||
      !content.trim()
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Le titre et le contenu sont obligatoires."
        },
        { status: 400 }
      );
    }

    const analysis = await prisma.analysis.create({
      data: {
        title: title.trim(),
        content: content.trim()
      }
    });

    return NextResponse.json(
      {
        success: true,
        message: "Analyse enregistrée.",
        analysis
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Erreur création analyse:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Impossible d'enregistrer l'analyse."
      },
      { status: 500 }
    );
  }
}
  
