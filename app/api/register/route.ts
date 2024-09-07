import bcrypt from 'bcrypt'

import prisma from "@/libs/prisma"

import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const body = await request.json()
  console.log(body);

  const { name, email, password } = body

  const salt: string = await bcrypt.genSaltSync()
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await prisma.user.create({
    data: {
      name,
      email,
      hashedPassword,
    },
  });

  return NextResponse.json({
    id: user.id,
    name: user.name,
    email: user.email,
  });
}