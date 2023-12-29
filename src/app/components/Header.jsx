import Link from "next/link";
import Image from "next/image";
import Icon from "../../assets/icon-nav.png";
import ThemeSwitcher from "./ThemeSwitcher";


function Header() {
  return (
    <div className="navbar sticky top-0 flex justify-around z-50 bg-slate-50 border-b-[2px] border-slate-600 dark:bg-gray-900">
      <Link href="/" className="flex flex-col justify-center items-center">
        <Image src={Icon} className=" ml-5 mt-2 w-[70px] md:w-[100px]" />
        <p className="text-black text-[1rem] md:text-[1.25rem] font-bold ml-[30px] font-roboto dark:text-white">
          INUKKORO
        </p>
      </Link>

      <ul className="flex gap-[13px] sm:gap-[17px] md:gap-[50px] mr-4 ">
        <li>
          <Link href="/">
            <p className="text-black font-roboto uppercase dark:text-white ">Home</p>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <p className="text-black font-roboto uppercase dark:text-white">About</p>
          </Link>
        </li>
        <li>
          <Link href="/member">
            <p className="text-black font-roboto uppercase dark:text-white">Member</p>
          </Link>
        </li>
      </ul>
      <ThemeSwitcher />
    </div>
  );
}

export default Header;
