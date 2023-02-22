import Image from "next/image";
import Link from "next/link";

export default function SourceBelajar({ resources }: any) {
  return (
    <div className="card-description card-color">
      <h2 className="heading-keempat">Sumber Belajar</h2>
      <div className="pt-4 space-y-4 md:space-y-5">
        {resources.map((source: any) => (
          <div className="flex space-x-2" key={source.detail}>
            <Link
              className="button-icon"
              href={source.linkSumber}
              target="_blank"
            >
              <Image
                src={`/icon/${source.tipe}.svg`}
                alt={source.detail}
                height={44}
                width={44}
              />
            </Link>
            <Link
              className="detail-source"
              href={source.linkSumber}
              target="_blank"
            >
              <p className="text-detail-source">{source.detail}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
