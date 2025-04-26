import type { AdapterUser as BaseAdapterUser } from "next-auth/adapters";
import type { UserType } from "models/user";

declare module "@auth/core/adapters" {
  interface AdapterUser
    extends BaseAdapterUser,
      Omit<UserType, "_id" | "password" | "createdAt" | "updatedAt"> {}
}

// import 'next-auth';
// import { JWT } from 'next-auth/jwt';

// declare module 'next-auth' {
//   interface Session {
//     user: {
//       id: string;
//       email: string;
//       background: string;
//       // Add any other custom properties here
//     };
//   }

//   interface User {
//     background: string;
//     // Add any other custom properties here
//   }
// }

// declare module 'next-auth/jwt' {
//   interface JWT {
//     background?: string;
//     // Add any other custom properties here
//   }
// }
