import CardList from "@/app/components/cardList"
import TitlePage from "@/app/components/titlePage"
import CardDesc from "@/app/components/cardDesc"
import CardNote from "../components/cardNote";

export default function Frontend() {
    const listAlur = [
        {linkTo: "dasarweb", jalur: "Dasar Web"},
        {linkTo: "javascript", jalur: "Javascript"},
        {linkTo: "cli", jalur: "CLI"},
        {linkTo: "nodejs", jalur: "NodeJS"},
        {linkTo: "git", jalur: "Git"},
        {linkTo: "postgresql", jalur: "PostgreSQL"},
        {linkTo: "api", jalur: "API"},
        {linkTo: "caching", jalur: "Caching"},
        {linkTo: "security", jalur: "Security"},
        {linkTo: "testing", jalur: "Testing"},
    ];
    let num = 0;
    return (
        <section id="main" className="container">
            <div className="hero-section space-y-8">
                <TitlePage 
                    title="Backend" 
                    linkBack="/" 
                    backTo="Home" 
                />
                <CardDesc 
                    desc="Backend adalah bagian yang bertugas untuk mengelolah logika dari sebuah website.Logika tersebut bekerja untuk menghubungkan antara database dengan API. Hal itu yang nantinya akan dikomsumsi oleh frontend. Backend developer setidaknya harus mengerti juga dasar-dasar dari frontend. Logika pemrograman pada backend bisa ditulis dalam berbagai bahasa pemrograman. Namun, untuk memudahkan proses belajar. Maka kami menyarankan untuk mengunakan bahasa pemrograman Javascript." 
                />
                <CardNote desc="Backend developer harus memiliki pengetahuan dasar mengenai frontend development seperti html dan css." />
                <div className="layout-grid">
                    {listAlur.map(list =>
                        <CardList listNumber={num++} linkTo={`/backend/${list.linkTo}`} jalur={list.jalur} />
                    )}
                </div>
            </div>
        </section>
    )
}