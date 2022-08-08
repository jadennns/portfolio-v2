import Image from "next/image";
import Link from "next/link";
import { AiOutlineTwitter, AiOutlineGithub } from "react-icons/ai";
import { SiKofi } from "react-icons/si";
import { BiDonateHeart } from "react-icons/bi";

export default function Footer() {
  return (
    <footer className="footer p-10 bg-neutral text-neutral-content">
      <div>
        <Image
          src={"/assets/PysduckSwim.gif"}
          width={70}
          height={70}
          alt="avatar"
          className="rounded-md"
        />
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved
          <br />
          jadennns.space
        </p>
      </div>
      <div>
        <span className="footer-title">Social</span>
        <div className="grid grid-flow-col gap-3">
          <Link href={"https://twitter.com/AbsurdBasically"}>
            <AiOutlineTwitter size={30} className="cursor-pointer" />
          </Link>
          <Link href={"https://github.com/jadennns"}>
            <AiOutlineGithub size={30} className="cursor-pointer" />
          </Link>
          <Link href={"https://ko-fi.com/jadennns"}>
            <SiKofi size={30} className="cursor-pointer" />
          </Link>
          <Link href={"https://saweria.co/jadennns"}>
            <BiDonateHeart size={30} className="cursor-pointer" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
