import Image from "next/image";
import Link from "next/link";

export default function SourceBelajar({icon, detail, linkSource}: any) {
    return (
        <Link href={linkSource} target="_blank" key={detail} className="flex space-x-2">
            <div className="button-icon">
                <Image src={`/icon/${icon}.svg`} alt={detail} height={44} width={44} />
            </div>
            <div className="detail-source">
                <p className="text-detail-source">{detail}</p>
            </div>
        </Link>
    )
}