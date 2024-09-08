import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";

import prisma from '@/libs/prisma'

export async function getSession() {
  return await getServerSession(authOptions)
} 

export async function getCurrentUser() {
  try {
    const session = await getSession();

    if(!session?.user?.email) {
      return null;
    }

    const currentUser = await prisma.user.findUnique({
      where: {
        email: session.user.email,
      }
    })

    if(!currentUser) {
      return null;
    }

    return {
      id: currentUser.id,
      name: currentUser.name,
      email: currentUser.email,
      createdAt: currentUser.createdAt.toISOString(),
      updatedAt: currentUser.updatedAt.toISOString(),
      emailVerified: currentUser.emailVerified
    }
  }
  catch(ex) {

  }
}