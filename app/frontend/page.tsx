import CardList from "@/app/components/cardList"
import TitlePage from "@/app/components/titlePage"
import CardDesc from "../components/cardDesc"

export default function Frontend() {
    const listAlur = [
        {lisNumber: 0, linkTo: "dasarweb", jalur: "Dasar Web"},
        {lisNumber: 1, linkTo: "html", jalur: "HTML"},
        {lisNumber: 2, linkTo: "css", jalur: "CSS"},
        {lisNumber: 3, linkTo: "javascript", jalur: "Javascript"},
        {lisNumber: 4, linkTo: "bootstrap", jalur: "Bootstrap"},
        {lisNumber: 5, linkTo: "git", jalur: "Git"},
        {lisNumber: 6, linkTo: "npm", jalur: "NPM"},
        {lisNumber: 7, linkTo: "react", jalur: "React"},
        {lisNumber: 8, linkTo: "tailwindcss", jalur: "Tailwindcss"},
        {lisNumber: 9, linkTo: "nextjs", jalur: "Next Js"},
        {lisNumber: 10, linkTo: "api", jalur: "API"},
        {lisNumber: 11, linkTo: "projek", jalur: "Proyek Akhir"},
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
                    desc="Frontend adalah bagian yang berinteraksi dengan pengguna. Dalam hal ini semua yang tampil di browser adalah tugas serorang frontend developer untuk mengatur tampilan dan interaksinya dengan pengguna. Selain itu, frontend dev bertugas untuk memanfaatkan API yang dibuat oleh backend agar bisa dimanfaatkan pada browser untuk mebuat website lebih interaktif dan dinamis." 
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