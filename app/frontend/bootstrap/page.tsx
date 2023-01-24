import ButtonBack from '@/app/components/buttonBack'
import CardDesc from '@/app/components/cardDesc'
import SourceBelajar from '@/app/components/sourceBelajar'
import TitlePage from '@/app/components/titlePage'

export default function Html() {
    const sources = [
        {icon: 'link', detail: "Pengenalan bootstrap - Petani Kode (Cukup tau aja)", link: "https://www.petanikode.com/bootstrap-dasar/"},
        {icon: 'youtube', detail: "Bootstrap 5 - CAI (Rekomendasi untuk pemula)", link: "https://www.youtube.com/watch?v=CleFk3BZB3g&list=PLFIM0718LjIUBrbm6Gdh6k7ZUvPIAZm7p"},
        {icon: 'youtube', detail: "Bootstrap Full Course - Freecodecamp (Rekomendasi untuk pemula - Berbahasa inggris)", link: "https://youtu.be/-qfEOE4vtxE"},
        {icon: 'link', detail: "Dokumentasi bootstrap (Berbahasa inggris)", link: "https://getbootstrap.com/"},
    ]
    return (
        <section id="main" className="container">
            <div className="hero-section space-y-8">
                <TitlePage
                    title="Bootstrap" 
                    linkBack="/frontend" 
                    backTo="Frontend" 
                />
                <CardDesc 
                    desc="Bootstrap adalah sebuah framework pengembangan web front-end yang populer dan open-source. Framework ini digunakan untuk membuat website dan aplikasi web yang responsif dan mobile-first. Bootstrap menyediakan kumpulan komponen CSS dan JavaScript yang dirancang untuk bekerja secara harmonis, seperti form, tombol, dan navigation bar, untuk membantu developer dalam membuat proyek web yang responsif dan menarik. Bootstrap juga menyertakan sistem grid yang responsif yang memudahkan dalam pembuatan layout yang sesuai dengan ukuran layar yang berbeda. Bootstrap juga mendukung plugin JavaScript seperti modal, tooltip, dan popover. Bootstrap merupakan alat yang kuat yang dapat membantu developer dalam membuat website dan aplikasi web yang profesional, responsif dengan cepat dan mudah." 
                />
                <SourceBelajar resources={sources} />
                <ButtonBack linkBack="/frontend" />
            </div>
        </section>
    )
}