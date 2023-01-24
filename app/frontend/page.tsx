import CardList from "@/app/components/cardList"
import TitlePage from "@/app/components/titlePage"
import CardDesc from "@/app/components/cardDesc"
import CardNote from "@/app/components/cardNote"

export default function Frontend() {
    const listAlur = [
        {linkTo: "dasarweb", jalur: "Dasar Web"},
        {linkTo: "html", jalur: "HTML"},
        {linkTo: "css", jalur: "CSS"},
        {linkTo: "javascript", jalur: "Javascript"},
        {linkTo: "bootstrap", jalur: "Bootstrap"},
        {linkTo: "git", jalur: "Git"},
        {linkTo: "npm", jalur: "NPM"},
        {linkTo: "react", jalur: "React"},
        {linkTo: "tailwindcss", jalur: "Tailwindcss"},
        {linkTo: "nextjs", jalur: "Next Js"},
        {linkTo: "api", jalur: "API"},
        {linkTo: "projek", jalur: "Proyek Akhir"},
    ];
    let num = 0;
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
                <CardNote desc="Alur belajar yang disediakan berdasarkan pengalaman dan riset. Oleh karena itu, alur belajar bisa disesuaikan dengan kebutuhan masing-masing." />
                <div className="layout-grid">
                    {listAlur.map(list =>
                        <CardList listNumber={num++} linkTo={`/frontend/${list.linkTo}`} jalur={list.jalur}  key={num.toString()} />
                    )}
                </div>
            </div>
        </section>
    )
}