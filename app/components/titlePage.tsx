import Image from "next/image";
import Link from "next/link";

export default function TitlePage({ title, linkBack, backTo }: any) {
  return (
    <div className="flex justify-between">
      <h1 className="heading-ketiga">{title}</h1>
      <Link
        href={linkBack}
        className="button py-1 px-2 flex items-center space-x-1"
      >
        <Image src="/icon/back.svg" alt="back" height={22} width={22} />
        <p className="button-text text-lg rounded-lg">{backTo}</p>
      </Link>
    </div>
  );
}
