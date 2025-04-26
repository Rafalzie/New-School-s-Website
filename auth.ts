import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import type { UserDocument } from "models/user";
import { User } from "models/user";
import bcrypt from "bcrypt";
import { connectToDatabase } from "serverActions/mongoose-connector";

export async function getUser(email: string): Promise<UserDocument | null> {
  try {
    await connectToDatabase();
    const user: UserDocument | null = await User.findOne({ email });
    return user;
  } catch (error) {
    throw new Error("Failed to fetch user.");
  }
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const user = await getUser(email);
          if (!user) return null;
          const passwordsMatch = await bcrypt.compare(password, user.password);
          if (passwordsMatch) return user;
        }
        return null;
      },
    }),
  ],

  callbacks: {
    async session({ session }) {
      await connectToDatabase();
      const dbuser: UserDocument | null = await User.findOne({
        email: session.user.email,
      });
      //add user to session
      if (!dbuser) {
        return session;
      }
      //@ts-ignore
      const {
        avatarUrl,
        background,
        careerGoals,
        email,
        favoriteArtists,
        interests,
        name,
        role,
      } = dbuser;

      const id = dbuser.id.toString();
      const emailVerified = new Date();

      session.user = {
        avatarUrl,
        background,
        careerGoals,
        email,
        favoriteArtists,
        interests,
        name,
        role,
        id,
        emailVerified,
      };

      return session;
    },
  },
});
