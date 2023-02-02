import Link from "next/link";

export default function Footer() {
    return (
        <footer className="container">
            <div className="relative">
                <div className="absolute bottom-0 left-0 right-0 w-full py-4">
                    <div className="w-full flex justify-between items-center">
                        <div className="flex items-center">
                            <Link href="/kontributor" className="font-normal text-white">Thanks to: </Link>
                            <div className="flex -space-x-3 pl-2 items-center">
                                <img className="w-9 h-9 border-2 border-white rounded-full dark:border-gray-800" src="https://avatars.githubusercontent.com/u/108800230?v=4" alt="" />
                                <img className="w-9 h-9 border-2 border-white rounded-full dark:border-gray-800" src="https://avatars.githubusercontent.com/u/108800230?v=4" alt="" />
                                <Link className="flex items-center justify-center w-8 h-8 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800" href="https://github.com/perdiDev/roadmapid/graphs/contributors" target="_blank">+5</Link>
                            </div>
                        </div>
                        <a className="text-sm text-white-1 font-extralight" href="https://www.instagram.com/perdidev/">created by @perdi<span className="text-red-600">dev</span> ©2023</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
