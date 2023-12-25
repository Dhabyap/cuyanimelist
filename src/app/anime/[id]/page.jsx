import CollectionButton from "@/app/components/AnimeList/CollectionButton";
import CommentBox from "@/app/components/AnimeList/CommentBox";
import CommentInput from "@/app/components/AnimeList/CommentInput";
import VideoPlayer from "@/app/components/Utilities/VideoPlayer";
import { getAnimeResponse } from "@/app/libs/api-libs";
import { authUserSession } from "@/app/libs/auth-libs";
import prisma from "@/app/libs/prisma";
import Image from "next/image";

const Page = async ({ params: { id } }) => {
  const anime = await getAnimeResponse("anime/" + id);
  const user = await authUserSession();
  const collection = await prisma.collection.findFirst({
    where: { user_email: user?.email, mal_id: id },
  });
  return (
    <>
      <div className="pt-4 px-4">
        <h3 className="text-2xl text-color-primary">
          {anime.data.title} - {anime.data.year}
        </h3>
        {!collection && user && <CollectionButton mal_id={id} user_email={user?.email} anime_image={anime.data.images.webp.image_url} anime_title={anime.data.title} />}
      </div>
      <div className="pt-4 px-4 flex gap-2 text-color-primary overflow-x-auto">
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
          <h3>Peringkat</h3>
          <p>{anime.data.rank}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-3 m-1">
          <h3>Score</h3>
          <p>{anime.data.score}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-3 m-1">
          <h3>Status</h3>
          <p>{anime.data.status}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-3 m-1">
          <h3>Duration</h3>
          <p>{anime.data.duration}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-3 m-1">
          <h3>Favorites</h3>
          <p>{anime.data.favorites} People</p>
        </div>
      </div>

      <div className="pt-4 px-4 flex sm:flex-nowrap flex-wrap gap-2 text-color-primary ">
        <Image src={anime.data.images.webp.image_url} alt={anime.data.images.jpg.image_url} width={250} height={250} className="w-full rounded object-cover" />
        <p className="text-justify text-xl">{anime.data.synopsis} </p>
      </div>
      <div className="p-4">
        <h3 className="text-color-primary text-2xl mb-2">Komentar Penonton</h3>

        <CommentBox mal_id={id} />
        {user && <CommentInput mal_id={id} user_email={user?.email} username={user?.name} anime_title={anime.data.title} />}
      </div>
      <div>
        <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
      </div>
    </>
  );
};

export default Page;
