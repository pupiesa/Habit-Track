import { authOptions } from "../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return (
      <p>
        Access Denied. Please <a href="/auth/login">Login</a>
      </p>
    );
  }
  return <h1>Welcome, {session.user.name}!</h1>;
}
