import CardList from "@/app/components/cardList"
import TitlePage from "@/app/components/titlePage"
import CardDesc from "../components/cardDesc"

export default function Frontend() {
    const listAlur = [
        {lisNumber: 1, linkTo: "html", jalur: "HTML"},
        {lisNumber: 2, linkTo: "css", jalur: "CSS"},
        {lisNumber: 3, linkTo: "javascript", jalur: "Javascript"},
        {lisNumber: 4, linkTo: "reactjs", jalur: "React JS"},
    ]
    return (
        <section id="main" className="container">
            <div className="hero-section space-y-8">
                <TitlePage 
                    title="Frontend" 
                    linkBack="/" 
                    backTo="Home" 
                />
                <CardDesc 
                    desc="Frontend adalah bagian dari sebuah aplikasi yang membuatnya terlihat keren dan mudah digunakan. Ini termasuk desain tampilan yang menarik, tombol yang mudah ditekan, dan cara yang mudah untuk berinteraksi dengan aplikasi." 
                />
                <div className="layout-grid">
                    {listAlur.map(list =>
                        <CardList listNumber={list.lisNumber} linkTo={`/frontend/${list.linkTo}`} jalur={list.jalur} />
                    )}
                </div>
            </div>
        </section>
    )
}