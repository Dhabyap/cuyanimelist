import { authUserSession } from "@/app/libs/auth-libs";
import prisma from "@/app/libs/prisma";
import Link from "next/link";
import Header from "@/app/components/Dashboard/Header";
const Page = async () => {
  const user = await authUserSession();
  const comments = await prisma.comment.findMany({ where: { user_email: user.email } });
  return (
    <section className="mt-4 px-3 w-full">
      <Header title={"My Comments"} />
      <div className="grid grid-cols-1 px-4 py-8 gap-4">
        {comments.map((comment) => {
          return (
            <Link href={`/anime/${comment.mal_id}`} key={comment.id} className="bg-color-primary text-color-dark p-4">
              <p className="text-sm">{comment.anime_title}</p>
              <p className="italic">{comment.comment}</p>
            </Link>
          );
        })}
        <div></div>
      </div>
    </section>
  );
};

export default Page;
