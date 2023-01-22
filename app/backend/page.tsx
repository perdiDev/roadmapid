import CardList from "@/app/components/cardList"
import TitlePage from "@/app/components/titlePage"
import CardDesc from "@/app/components/cardDesc"

export default function Frontend() {
    const listAlur = [
        {lisNumber: 1, linkTo: "html", jalur: "Frontend"},
        {lisNumber: 2, linkTo: "js", jalur: "Javascript"},
    ]
    return (
        <section id="main" className="container">
            <div className="hero-section space-y-8">
                <TitlePage 
                    title="Backend" 
                    linkBack="/" 
                    backTo="Home" 
                />
                <CardDesc 
                    desc="Backend biasanya bekerja di sisi server dari pengembangan web dan bertanggung jawab untuk menciptakan, memelihara, dan mengoptimalkan logika dan fungsi aplikasi. Mereka bekerja pada kode sisi server dan berinteraksi dengan basis data dan API untuk menanganani aliran data dan berkomunikasi dengan sisi depan." 
                />
                <div className="layout-grid">
                    {listAlur.map(list =>
                        <CardList listNumber={list.lisNumber} linkTo={`/backend/${list.linkTo}`} jalur={list.jalur} />
                    )}
                </div>
            </div>
        </section>
    )
}