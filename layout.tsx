import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "globalStyles/globals.css";
import StyledComponentsRegistry from "utils/registry";
import {
  LayoutGrid,
  SidebarContainer,
  Main,
  HeaderContainer,
} from "./globalStyles/layout";
import Sidebar from "./components/sidebar/sidebar";
import { auth } from "../auth";
import LoginPage from "pages/login/page";
import { Header } from "components/header/Header";
import { SessionProvider } from "next-auth/react";
import MobileHamburgerMenu from "components/mobileHamburgerMenu/HamburgerMenu";

const plusJarkaSans = Plus_Jakarta_Sans({
  weight: ["300", "400", "500", "600"],
  style: "normal",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vefskólinn LMS",
  description:
    "This is a page for students of Vefskólinn to learn web development.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <html lang="en">
      <body className={plusJarkaSans.className}>
        <StyledComponentsRegistry>
          <SessionProvider session={session}>
            {session?.user ? (
              <LayoutGrid>
                <MobileHamburgerMenu />
                <SidebarContainer>
                  <Sidebar />
                </SidebarContainer>
                <HeaderContainer>
                  <Header session={session} />
                </HeaderContainer>
                <Main>{children}</Main>
              </LayoutGrid>
            ) : (
              <LoginPage />
            )}
          </SessionProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
