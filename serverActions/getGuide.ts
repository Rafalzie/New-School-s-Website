"use server";
import { Types } from "mongoose";
import { GuideDocument } from "models/guide";
import { connectToDatabase } from "./mongoose-connector";
import { Guide } from "models/guide";

export const getGuide = async (id: string) => {
  if (!Types.ObjectId.isValid(id)) {
    return null;
  }
  const objectId = new Types.ObjectId(id);
  await connectToDatabase();
  const guide: GuideDocument | null =
    (await Guide.findOne({
      _id: objectId,
    })) || null;
  return guide;
};
