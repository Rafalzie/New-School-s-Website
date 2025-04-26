import {
  Document,
  Schema,
  model,
  models,
  InferSchemaType,
  Types,
} from "mongoose";

const returnSchema = new Schema({
  projectUrl: { type: Schema.Types.String, required: true },
  liveVersion: { type: Schema.Types.String, required: true },
  pictureUrl: { type: Schema.Types.String, required: false },
  projectName: { type: Schema.Types.String, required: true },
  comment: { type: Schema.Types.String, required: true },
  owner: { type: Schema.Types.ObjectId, required: true, ref: "User" },
  createdAt: { type: Schema.Types.Date, required: true, default: Date.now },
  reviewedAt: { type: Schema.Types.Date, required: false },
  guide: { type: Schema.Types.ObjectId, required: true, ref: "Guide" },
});

export type ReturnType = InferSchemaType<typeof returnSchema> & {
  _id: Types.ObjectId;
};

export type ReturnDocument = ReturnType & Document;
export const Return =
  models.Return || model<ReturnDocument>("Return", returnSchema);
