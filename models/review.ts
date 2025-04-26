import {
  Document,
  Schema,
  model,
  models,
  InferSchemaType,
  Types,
} from "mongoose";

export enum Vote {
  NO_PASS = "no pass",
  PASS = "pass",
  RECOMMEND_TO_GALLERY = "recommend to Hall of fame",
}

const reviewSchema = new Schema({
  guide: { type: Schema.Types.ObjectId, required: true, ref: "Guide" },
  return: { type: Schema.Types.ObjectId, required: true, ref: "Return" },

  // the owner is the user who submitted the feedback and gave a vote and comment
  owner: { type: Schema.Types.ObjectId, required: true, ref: "User" },
  vote: {
    type: Schema.Types.String,
    required: true,
    enum: Object.values(Vote),
  },
  comment: { type: Schema.Types.String, required: true },

  createdAt: { type: Schema.Types.Date, required: true, default: Date.now },
  updatedAt: { type: Schema.Types.Date, required: false },
  commentAnswer: { type: Schema.Types.String, required: false },

  grade: { type: Schema.Types.Number, required: false },
});

export type FeedbackType = InferSchemaType<typeof reviewSchema>;

export type FeedbackTypeWithId = FeedbackType & {
  _id: Types.ObjectId;
};

// after someone has reviewed the feedback it becomes a reviewed feedback
export type GradedFeedbackType = FeedbackTypeWithId & {
  grade: number;
};

export type FeedbackDocument = FeedbackTypeWithId & Document;

export type GradedFeedbackDocument = GradedFeedbackType & Document;

export const Review =
  models?.Review || model<FeedbackDocument>("Review", reviewSchema);
