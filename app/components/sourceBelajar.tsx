import Image from "next/image";
import Link from "next/link";

export default function SourceBelajar({icon, detail, linkSource}: any) {
    return (
        <div key={detail} className="flex space-x-2">
            <Link className="button-icon" href={linkSource}  target="_blank">
                <Image src={`/icon/${icon}.svg`} alt={detail} height={44} width={44} />
            </Link>
            <Link className="detail-source" href={linkSource}  target="_blank">
                <p className="text-detail-source">{detail}</p>
            </Link>
        </div>
    )
}