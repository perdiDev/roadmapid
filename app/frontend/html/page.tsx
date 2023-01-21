import ButtonBack from '@/app/components/buttonBack'
import CardDesc from '@/app/components/cardDesc'
import SourceBelajar from '@/app/components/sourceBelajar'
import TitlePage from '@/app/components/titlePage'

export default function Html() {
    const sources = [
        {icon: 'github', detail: "Repo PerdiDev", link: "https://github.com/perdiDev"},
        {icon: 'youtube', detail: "YT-Web Programing Unpas", link: "https://youtube.com"},
        {icon: 'github', detail: "Repo Unpas", link: "https://github.com/perdiDev"},
    ]
    return (
        <section id="main" className="container">
            <div className="hero-section space-y-8">
                <TitlePage 
                    title="HTML" 
                    linkBack="/frontend" 
                    backTo="Frontend" 
                />
                <CardDesc 
                    desc="HTML (Hypertext Markup Language) adalah bahasa markup standar yang digunakan untuk menentukan struktur dan konten dari halaman web. Ini menggunakan tag-tag yang dikenali oleh browser untuk menentukan bagaimana elemen seperti teks, gambar, dan video ditampilkan pada halaman. HTML merupakan dasar dari semua halaman web yang ditampilkan di internet." 
                />
                <div className="card-description card-color">
                    <h2 className="heading-keempat">Source Belajar</h2>
                    <div className="pt-4 space-y-4 md:space-y-5">
                        {sources.map(source => 
                            <SourceBelajar icon={source.icon} detail={source.detail} linkSource={source.link} />
                        )}
                    </div>
                </div>
                <ButtonBack linkBack="/frontend" />
            </div>
        </section>
    )
}