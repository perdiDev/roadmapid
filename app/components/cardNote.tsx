export default function CardNote({desc}: any) {
    return (
        <div className="card-description card-color">
            <h2 className="heading-keempat">Note :</h2>
            <p className="text-description">{desc}</p>
        </div>
    )
}