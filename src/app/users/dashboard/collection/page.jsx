import Image from "next/image";
import Link from "next/link";
import Header from "@/app/components/Dashboard/Header";
import prisma from "@/app/libs/prisma";
import { authUserSession } from "@/app/libs/auth-libs";

const Page = async () => {
  const user = await authUserSession();
  const collection = await prisma.collection.findMany({
    where: { user_email: user?.email },
  });
  return (
    <section className="mt-4 px-3 w-full">
      <Header title={"My Collection"} />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {collection.map((collect, index) => {
          return (
            <Link key={index} href={`/anime/${collect.mal_id}`} className="relative">
              <Image src={collect.anime_image} alt={collect.mal_id} width={350} height={350} className="w-full" />
              <div className="absolute flex items-center justify-center bottom-0 w-full bg-color-accent h-16">
                <h5 className="text-xl text-center">{collect.anime_title}</h5>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Page;
