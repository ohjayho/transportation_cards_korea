import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const filePath = path.join(process.cwd(), "/public/cards.json");
  const cardsFile = await fs.promises.readFile(filePath, "utf8");
  const cards = JSON.parse(cardsFile);

  return NextResponse.json(cards);
}
