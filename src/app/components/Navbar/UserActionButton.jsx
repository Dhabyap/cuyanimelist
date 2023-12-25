import Link from "next/link";
import { authUserSession } from "@/app/libs/auth-libs";
const userActionButton = async () => {
  const user = await authUserSession();

  const actionLabel = user ? "Sign Out" : "Sign In";
  const actionURL = user ? "/api/auth/signout" : "/api/auth/signin";

  return (
    <div className="flex gap-2 justify-between">
        {
            user ? <Link className="py-1" href="/users/dashboard">Dashboard</Link> : null
        }
      <Link href={actionURL} className="bg-color-dark text-color-accent py-1 px-12 inline-block">
        {actionLabel}
      </Link>
    </div>
  );
};

export default userActionButton;
