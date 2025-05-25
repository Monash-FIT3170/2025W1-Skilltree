import { cookies } from "next/headers";
import LogoutButton from "@/components/LogoutButton";

export default async function Home() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  return (
    <div>
      <h1>PEEPEE</h1>
      {token ? <LogoutButton /> : <p>You are not logged in.</p>}
    </div>
  );
}
