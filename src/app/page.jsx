import AnimeList from "@/app/components/AnimeList";
import Header from "./components/AnimeList/Header";
import { getAnimeResponse, getNestedAnimeResponse, reproduce } from "./libs/api-libs";

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=8");
  let recommendedAnime = await getNestedAnimeResponse("recommendations/anime", "entry");
  recommendedAnime = reproduce(recommendedAnime, 8)
  
  return (
    <>
      <section>
        <Header judul="Paling Populer" href="/populer" titleHref="Lihat Semua" />
        <AnimeList api={topAnime} />
      </section>
      <section>
        <Header judul="Rekomendasi" />
        <AnimeList api={recommendedAnime} />
      </section>
    </>
  );
};

export default Page;
