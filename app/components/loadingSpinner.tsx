import Image from "next/image";

export default function LoadingSpinner() {
    return (
        <div className="relative">
            <div className="absolute top-0 left-0 w-screen h-screen bg-slate-900 bg-opacity-10 flex justify-center items-center">
                <Image src="/icon/github.svg" alt="loading ui" width={44} height={44} className="animate-spin" />
            </div>
        </div>
    )
}