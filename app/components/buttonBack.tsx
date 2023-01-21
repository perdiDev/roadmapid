import Link from "next/link";

export default function ButtonBack({linkBack}: any) {
    return (
        <div className="flex justify-center">
            <Link href={linkBack} className="button py-2 px-3">
                <div className="button-text text-lg md:text-xl rounded-lg">Kembali</div>
            </Link>
        </div>
    )
}