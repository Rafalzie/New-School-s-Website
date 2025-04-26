## About

This is a Learning Management System (LMS) used by Vefskóli at Tækniskóli.

### Features:

- Register users and login
- View information about projects that need to be completed (known as guides)
- Return your project work (known as returns)
- Give feedback on other students' returns (known as feedback)
- Grade other students' feedback out of 10 (known as a \_graded_review)
- Be notified of your status for a given guide. (see guideTypes.ts)
- View all feedback given and received for a guide
- View information about other students and teachers
- Filter guides based on modules

## Getting Started

Setup a MongoDB instance and add the connection string MONGODB_CONNECTION to your env files.
Create guides that follow the schema setout in app/models/guide.ts

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Understanding the guide data

Each model includes schema and associated types.
The Review collection is used for both Feedback and GradedFeedback. The owner of the original return is determined from the owner of the linked return document.

The data for all guides is grabbed using getGuides. That information is then enriched/extended with calculated statuses in a server function before being passed to the client.

## Folder Structure

The project uses the following structure:

- **`app/`**: Contains core application files organized by function.
  - **`assets/`**: Stores static assets, such as images or logos.
  - **`components/`**: Contains React components organized by feature or section.
  - **`globalStyles/`**: Holds global styling files shared across components for a consistent theme.
  - **`models/`**: Includes all Mongoose models and schemas used for MongoDB collections (e.g., User, Guide).
  - **`pages/`**: All Next.js pages, defining the routes for the application.
  - **`providers/`**: Contains React Context providers used to supply global state and context to the application.
  - **`serverActions/`**: Contains server-side functions, such as authentication and data fetching.
  - **`UIcomponents/`**: Houses UI elements that are styled and reusable across the app.
  - **`utils/`**: Utility functions that provide reusable logic and helper methods.
  - **`layout.tsx`**: Defines the main layout for pages, including structure, headers, and footers.

Other root-level files and directories:

- **`auth.config.ts` / `auth.ts`**: Configuration files for authentication.
- **`middleware.ts`**: Middleware settings for handling requests.
- **`public/`**: Contains public assets like images that can be accessed directly.
- **`types/`**: Type definitions used throughout the application.
- **`__tests__/`**: Test files for components and utilities.
- **`jest.config.ts`**: Configuration for Jest testing.
- **`next.config.mjs`**: Configuration for Next.js application settings.
- **`tsconfig.json`**: TypeScript configuration

## Current issues

We do not currently have a solutuon to grab updated data automatically, so to get fresh guide data the guides page needs to be uploaded.
Some pages are blank as they have no yet been implemented.

## Notes

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) in order to automatically optimize and load Inter, a custom Google Font.
