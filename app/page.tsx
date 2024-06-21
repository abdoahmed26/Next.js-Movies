import MainFooter from "@/components/Footer/main";
import Header from "@/components/HomeCom/Header";
import NowPlaying from "@/components/HomeCom/NowPlaying";
import Popular from "@/components/HomeCom/Popular";
import TopRated from "@/components/HomeCom/TopRated";
import UpComing from "@/components/HomeCom/UpComing";
import Body from "@/components/HomeCom/body";

export default function Home() {
  return (
    <main>
      <Header/>
      <Body/>
      <NowPlaying/>
      <UpComing/>
      <TopRated/>
      <Popular/>
      <MainFooter/>
    </main>
  );
}
