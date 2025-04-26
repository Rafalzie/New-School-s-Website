import { auth } from "auth";
import { LoginOrRegister } from "components/loginOrRegister/LoginOrRegister";

export default async function LoginPage() {
  const session = await auth();

  return <LoginOrRegister session={session} />;
}
