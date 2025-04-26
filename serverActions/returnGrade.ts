"use server";

import { ObjectId } from "mongodb";
import type { GradedFeedbackDocument } from "../models/review";
import { auth } from "../../auth";
import { Review } from "../models/review";
import { z } from "zod";

type GradeDataType = {
  grade: number | undefined;
  reviewId: string | undefined;
};

type GradeFormState =
  | {
      errors?: {
        reviewId?: string[];
        grade?: string[];
      };
      message?: string;
    }
  | undefined;

export async function returnGrade(state: GradeFormState, data: GradeDataType) {
  const validatedFields = GradeFormSchema.safeParse({
    grade: data.grade,
    reviewId: data.reviewId,
  });

  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { grade, reviewId } = validatedFields.data;
  const session = await auth();

  if (!session?.user) {
    return {
      success: false,
      message: "You must be logged in to give a grade",
    };
  }

  try {
    await Review.updateOne({ _id: new ObjectId(reviewId) }, { grade });

    const gradedDocument: GradedFeedbackDocument = (await Review.findById(
      new ObjectId(reviewId)
    )) as GradedFeedbackDocument;

    if (!gradedDocument) {
      return {
        success: false,
        message: "Failed to submit grade",
      };
    }

    return {
      success: true,
      data: gradedDocument.toObject(),
      message: "Grade submitted successfully",
    };
  } catch (e) {
    return {
      success: false,
      message: "Failed to submit grade",
    };
  }
}

const GradeFormSchema = z.object({
  grade: z
    .number()
    .int()
    .min(0, { message: "Grade must be at least 0" })
    .max(10, { message: "Grade must be at most 10" }),
  reviewId: z.string().min(2, { message: "Please append a reviewId" }).trim(),
});
