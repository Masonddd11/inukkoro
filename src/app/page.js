import Image from "next/image";
import Banner1 from "../assets/banner1.png";

import Valorant from "../assets/game icons/valorant.png";
import CSGO from "../assets/game icons/csgo.png";
import Apex from "../assets/game icons/apex.png";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[var(--dark-primary)] ">
      <div className="w-full flex justify-center items-star py-[100px] dark:bg-[var(--darkbg-primary)]">
        <div className="hero-content flex-col lg:flex-row">
          <Image src={Banner1} className="w-[50%] object-contain mr-[30px]" />
          <div>
            <h1 className="text-4xl text-black font-bold text-[2.7rem] w-100% dark:text-white">
              日本一の犬{" "}
              <span className=" text-orange-400 font-roboto">E-Sports</span>{" "}
              <span className="text-orange-400">チーム</span>
            </h1>
            <p className="py-6 text-black text-[1.2rem] dark:text-white">
              Inukkoroは、日本を代表する犬たちによるヴァロラントプロフェッショナルチームです。彼らは世界中で初めての動物E-Sportsチームとして知られています。Inukkoroは、そのユニークなメンバーシップと卓越したゲームプレイで注目されています。
            </p>
            <button className="btn btn-primary ">もっと見る</button>
          </div>
        </div>
      </div>
      <div className="flex bg-white justify-center align-item gap-5 dark:bg-[var(--darkbg-primary)]">
        <Image src={Valorant} width={45} />
        <Image src={CSGO} width={45} />
        <Image src={Apex} width={45} />
      </div>
    </div>
  );
}
