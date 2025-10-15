import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/veo-3:generateVideo";
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

async function generateVideoWithGemini(userPrompt: string): Promise<string> {
  const professionalPrompt = `Create a cinematic AI-generated video based on the following description: ${userPrompt}. Use high-quality visuals, smooth transitions, and professional editing style.`;

  const res = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        prompt: professionalPrompt,
        
      })
    }
  );

  if (!res.ok) throw new Error("Gemini Veo3 API error");
  const data = await res.json();
  // Adjust this according to Gemini Veo3 response structure
  return data.videoUrl || data.result?.videoUrl || "";
}

export async function POST(req: NextRequest) {
  const { prompt, userId } = await req.json();
  if (!prompt) {
    return NextResponse.json({ error: "Prompt is required" }, { status: 400 });
  }
 
  let videoUrl = "";
  try {
    videoUrl = await generateVideoWithGemini(prompt);
  } catch (err) {
    return NextResponse.json({ error: "Failed to generate video" }, { status: 500 });
  }
 
   

  return NextResponse.json({ });
}
