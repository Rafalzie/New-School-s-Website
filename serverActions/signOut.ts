"use server";
import { signOut as s } from "../../auth";

export const signOut = s; //needs to be in actions.ts so that it can be called on the client side
