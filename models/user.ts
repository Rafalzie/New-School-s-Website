import {
  Document,
  Schema,
  model,
  models,
  InferSchemaType,
  Types,
  Model,
} from "mongoose";

export interface RequiredUserInfo {
  name: string;
  email: string;
  password: string;
  role: string;
  createdAt: Date;
}

export enum OptionalUserInfoKeys {
  background = "background",
  careerGoals = "careerGoals",
  interests = "interests",
  favoriteArtists = "favoriteArtists",
  avatarUrl = "avatarUrl",
}

// Use mapped type to create OptionalUserInfo interface
export type OptionalUserInfo = {
  [key in OptionalUserInfoKeys]?: string;
};

export type UserInfo = RequiredUserInfo & OptionalUserInfo;

interface UserMethods {
  updateUserInfo: (
    this: UserDocument,
    updatedFields: OptionalUserInfo
  ) => Promise<void>;
}

const userSchema = new Schema(
  {
    name: { type: Schema.Types.String, required: true },
    email: { type: Schema.Types.String, required: true, unique: true },
    password: { type: Schema.Types.String, required: true },
    background: { type: Schema.Types.String, required: false },
    careerGoals: { type: Schema.Types.String, required: false },
    interests: { type: Schema.Types.String, required: false },
    favoriteArtists: { type: Schema.Types.String, required: false },
    role: { type: Schema.Types.String, required: true },
    avatarUrl: { type: Schema.Types.String, required: false },
  },
  { timestamps: true }
);

userSchema.method(
  "updateUserInfo",
  async function (this: UserDocument, updatedFields: Partial<UserType>) {
    Object.assign(this, updatedFields);

    await this.save();
  }
);

export type UserType = InferSchemaType<typeof userSchema> & {
  isLoggedIn?: boolean;
  _id: Types.ObjectId;
};
export type UserWithIdType = UserType & { id: Types.ObjectId };
export type UserDocument = UserType & Document & UserMethods;
type UserModel = Model<UserInfo, {}, UserMethods>;

export const User =
  models?.User || model<UserDocument, UserModel>("User", userSchema);
