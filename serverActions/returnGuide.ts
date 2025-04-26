"use server";
import { AdapterUser } from "next-auth/adapters";
import { auth } from "../../auth";
import { Return } from "../models/return";
import { ObjectId } from "mongodb";
import { z } from "zod";

export type ReturnFormData = {
  projectUrl?: string;
  liveVersion?: string;
  projectName?: string;
  comment?: string;
  imageOfProject?: string;
  guideId?: string;
} | null;

type ReturnFormState =
  | {
      errors?: {
        projectUrl?: string[];
        liveVersion?: string[];
        projectName?: string[];
        comment?: string[];
      };
      message?: string;
    }
  | undefined;

export async function returnGuide(
  state: ReturnFormState,
  data: ReturnFormData
) {
  const validatedFields = ReturnFormSchema.safeParse(data);

  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const {
    projectUrl,
    projectName,
    comment,
    liveVersion,
    guideId,
    imageOfProject,
  } = validatedFields.data;

  const session = await auth();

  if (!session?.user) {
    return {
      success: false,
      message: "You must be logged in to submit a return",
    };
  }
  const user = session?.user as AdapterUser;
  try {
    const theReturn = await Return.create({
      projectUrl,
      projectName,
      comment,
      liveVersion,
      owner: new ObjectId(user.id),
      guide: new ObjectId(guideId),
      imageOfProject,
    });
    return {
      success: true,
      message: "Return submitted successfully",
    };
  } catch (e) {
    return {
      success: false,
      message: "Failed to submit return",
    };
  }
}

const ReturnFormSchema = z.object({
  projectUrl: z.string().min(2, { message: "Please enter a valid URL" }).trim(),
  liveVersion: z
    .string()
    .min(2, { message: "Please enter a valid URL" })
    .trim(),
  projectName: z
    .string()
    .min(2, { message: "Please enter a valid project name" })
    .trim(),
  comment: z
    .string()
    .min(2, { message: "Please enter a valid description" })
    .trim(),
  guideId: z.string().trim(),
  imageOfProject: z.string().trim().optional(),
});
