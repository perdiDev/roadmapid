import Link from "next/link";

export default function CardList({listNumber, linkTo, jalur}: any) {
    return (
        <div className="card-road card-color" key={listNumber}>
            <h3 className="heading-number">{listNumber}</h3>
            <Link href={linkTo} className="button w-full py-2">
                <p className="button-text text-base md:text-lg">{jalur}</p>
            </Link>
        </div>
    )
}