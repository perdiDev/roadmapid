export default function CardDesc({desc}: any) {
    return (
        <div className="card-description card-color">
            <h2 className="heading-keempat">Deskripsi</h2>
            <p className="text-description">{desc}</p>
        </div>
    )
}