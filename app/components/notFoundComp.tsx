import Link from "next/link";

export default function NotFoundComp() {
    return (
        <div className="w-screen h-screen bg-transparent flex flex-col justify-center items-center">
            <Link className="button py-2 px-4 rounded-lg" href="/">
                <p className="button-text text-xl">Kembali</p>
            </Link>
        </div>
    )
}