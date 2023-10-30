import AnimeList from "@/app/components/AnimeList";
import Header from "./components/AnimeList/Header";
import { getAnimeResponse, getNestedAnimeResponse } from "./libs/api-libs";

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=8");
  let recommendedAnime = await getNestedAnimeResponse("recommendations/anime", "entry");

  const generateNumberMin = () => {
    let firstNum = Math.floor(Math.random() * recommendedAnime.length-4)
    let secondNum = firstNum + 8
    const ArrRandomNumb = []
    ArrRandomNumb.push(firstNum)
    ArrRandomNumb.push(secondNum)
    return ArrRandomNumb
  }

  const randomArr = generateNumberMin()
  
  recommendedAnime = { data: recommendedAnime.slice(randomArr[0], randomArr[1]) }

  // rekomendasiAnime = { data: rekomendasiAnime.slice(0, 4) };

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
