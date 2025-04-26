"use server";
import { OptionalUserInfoKeys, User, UserWithIdType } from "models/user";
import { FilterQuery } from "mongoose";
import { connectToDatabase } from "./mongoose-connector";
import { ShareableUserInfo } from "types/types";

export const getUsers = async (
  filter: FilterQuery<any> = {}
): Promise<ShareableUserInfo[]> => {
  await connectToDatabase();
  const usersJSON = await User.find(filter);
  const users = JSON.parse(JSON.stringify(usersJSON)) as UserWithIdType[];

  const shareableUsers = users.map((userInfo) =>
    calculateShareableInfo(userInfo)
  );
  return shareableUsers;
};

const calculateShareableInfo = (
  userInfo: UserWithIdType
): ShareableUserInfo => {
  const shareableKeys = Object.keys(OptionalUserInfoKeys).concat(
    "name"
  ) as (keyof ShareableUserInfo)[];

  const shareableInfo = shareableKeys.reduce((acc, key) => {
    if (userInfo[key] && userInfo[key] !== undefined) {
      acc[key] = userInfo[key] as string;
    }
    return acc;
  }, {} as ShareableUserInfo);
  return shareableInfo;
};
