import { NextResponse } from "next/server";
import prisma from "/app/lib/prisma";

export async function POST(req) {
  try {
    const { username, email, password } = await req.json();

    // Log the received data
    console.log("Received data:", { username, email, password });

    // Hash the password before storing it

    const user = await prisma.user.create({
      data: { username, email, password },
    });

    // Log the created user
    console.log("Created user:", user);

    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    console.error("Error in POST /api/signup:", error);
    return NextResponse.json(
      { error: "User creation failed" },
      { status: 500 }
    );
  }
}
