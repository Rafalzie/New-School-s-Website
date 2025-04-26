import { OptionalUserInfoKeys } from "models/user";

export type ShareableUserInfo = Partial<{
  [key in OptionalUserInfoKeys]: string;
}> & {
  name: string;
};
