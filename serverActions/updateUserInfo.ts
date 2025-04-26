"use server";
import {
  OptionalUserInfo,
  OptionalUserInfoKeys,
  User,
  UserDocument,
} from "models/user";
import { objOnlyHasEnumKeys } from "utils/typeGuards";
import { ObjectId } from "mongodb";
import { auth } from "../../auth";

export const updateUserInfo = async (updatedUserInfo: OptionalUserInfo) => {
  const session = await auth();

  const isValid = await objOnlyHasEnumKeys(
    updatedUserInfo,
    OptionalUserInfoKeys
  );
  if (!isValid) {
    throw new Error("Invalid user info");
  }

  let user;
  try {
    user = (await User.findById(
      new ObjectId(session?.user?.id)
    )) as UserDocument;
    if (!user) {
      throw new Error();
    }
  } catch (error) {
    throw new Error("User not found");
  }

  try {
    await user.updateUserInfo(updatedUserInfo);
  } catch (error) {
    throw new Error("Failed to update user info");
  }
};
