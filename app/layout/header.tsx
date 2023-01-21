import Link from 'next/link'

export default function Header() {
    return (
        <header className="container">
            <div className="relative">
                <div className="absolute top-0 left-0 right-0">
                    <Link className="flex w-full justify-center py-4" href="/">
                        <div className="py-2 px-4 card-color rounded-lg">
                            <h1 className="text-white-1 font-bold text-lg">Roadmap<span className="text-red-600">Id</span></h1>
                        </div>
                    </Link>
                </div>
            </div>
        </header>
    )
}