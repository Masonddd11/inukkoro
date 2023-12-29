import Happydog from '../../assets/icon-nav.png';
import Morehappydog from '../../assets/icon-footer.png';
import Image from 'next/image';
import { FaDiscord } from 'react-icons/fa';

function about() {
  return (
    <div>
      <div>
        <div className="hidden md:diff md:aspect-[16/9] md:h-min-screen">
          <div className="diff-item-1">
            <div className="bg-primary text-primary-content text-9xl font-black grid place-content-center">
              INUKKORO
            </div>
          </div>
          <div className="diff-item-2">
            <div className="bg-base-200 text-9xl font-black grid place-content-center text-white">
              犬E-Sportsの新たな頂点へ
            </div>
          </div>
          <div className="diff-resizer"></div>
        </div>
      </div>
      <div className="">
        <div className="min-w-full bg-white min-h-screen p-[100px] border-white dark:bg-[var(--dark-primary)]">
          <div className="container mx-auto bg-white text-black dark:bg-[var(--dark-primary)] dark:text-white">
            <h1 className="text-4xl font-bold font-roboto">AIM WITH BARK</h1>
            <br />
            <p className="text-3xl bold">
              私たちのチーム名はInukkoro（イヌッコロ）です。Inukkoroは、日本一の犬E-Sportsチームとして、新たな頂点を目指しています。私たちは犬たちの驚異的な能力とゲームへの情熱を結集させ、競技シーンでの成功を追求しています。
            </p>
            <p className="text-3xl bold">
              私たちのミッションは、犬たちの新たな可能性を開拓し、E-Sportsの世界に革命を起こすことです。私たちは犬たちをプロのゲーマーとして育成し、彼らの優れた能力を最大限に活かしてチームプレイを展開しています。
            </p>
            <p className="text-3xl bold">
              私たちのチームには、様々な犬種からなる個性豊かなメンバーが集まっています。それぞれの犬たちは、彼ら固有の特徴と能力を持ち合わせており、チームの戦術の幅を広げる貴重な存在です。
            </p>
            <p className="text-3xl bold">
              Inukkoroは、犬E-Sportsの新たな頂点へと挑戦し続けます。私たちは競技シーンでの成功に向けて努力し、常に成長し続けることを約束します。私たちの活動を通じて、犬たちの驚異的な能力とチームワークの力を広く知っていただき、多くの人々に喜びと感動を届けることを願っています。
            </p>
            <p className="text-3xl bold">
              一緒にInukkoroの旅を楽しんでいただけることを心から願っています。ありがとうございます。
            </p>
          </div>
          <label className="swap swap-flip text-9xl grid place-items-center mt-[40px]">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" />

            <div className="swap-on grid place-items-center"><Image src={Morehappydog} width={250}></Image></div>
            <div className="swap-off grid place-items-center"><Image src={Happydog} width={250}></Image></div>
          </label>
          <div className='container mx-auto text-black'>
            <h2 className='text-4xl dark:text-white'>ＳＮＳ</h2>
            <a href='https://discord.gg/FXvPY9rH' target='__blank'><FaDiscord size={100} className=' dark:text-white'/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default about;
