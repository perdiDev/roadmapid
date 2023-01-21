import Link from 'next/link'

export default function Header() {
    return (
        <header className="container">
            <div className="relative">
                <div className="absolute top-0 left-0 right-0">
                    <div className="flex w-full justify-center py-4">
                        <Link className="py-2 px-4 card-color rounded-lg" href="/">
                            <h1 className="text-white-1 font-bold text-lg">Roadmap<span className="text-red-600">Id</span></h1>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}