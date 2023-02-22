import ButtonBack from '@/app/components/buttonBack'
import CardDesc from '@/app/components/cardDesc'
import CardNote from '@/app/components/cardNote'
import SourceBelajar from '@/app/components/sourceBelajar'
import TitlePage from '@/app/components/titlePage'

export default function Html() {
    const sources = [
        {icon: 'link', detail: "Tutorial Pengantar React - ReactId (Dokumentasi resmi)", link: "https://id.reactjs.org/tutorial/tutorial.html"},
        {icon: 'youtube', detail: "React untuk pemula - Dea Afrizal", link: "https://www.youtube.com/watch?v=3Jgju76gS2g"},
        {icon: 'youtube', detail: "Belajar react - CAI", link: "https://www.youtube.com/watch?v=3xB_2pHTEP0&list=PL9E3AWZAtxc6VamYdTbmQanW6RatFPT7d"},
        {icon: 'youtube', detail: "Belajar react dari awal - Array Id (Rekomendasi tapi video panjang)", link: "https://www.youtube.com/watch?v=JS5w4rUbjQE"},
    ]
    return (
        <section id="main" className="container">
            <div className="hero-section space-y-8">
                <TitlePage
                    title="React" 
                    linkBack="/frontend" 
                    backTo="Frontend" 
                />
                <CardDesc 
                    desc="ReactJS adalah sebuah library JavaScript untuk membuat user interface atau komponen UI. Dikembangkan dan diurus oleh Facebook. React fokus pada pembuatan komponen UI yang dapat digunakan kembali, yang dapat digabungkan untuk membuat interface pengguna yang kompleks. React menggunakan konsep yang disebut komponen yang memungkinkan developer untuk memecah interface pengguna menjadi bagian-bagian yang lebih kecil dan dapat digunakan kembali. React mengikuti pendekatan deklaratif dalam pemrograman, yang membuatnya lebih mudah dipahami dan diprediksi perilakunya. React juga kompatibel dengan perpustakaan dan framework lainnya, sehingga menjadi pilihan populer untuk membuat aplikasi web kompleks." 
                />
                <CardNote desc="Untuk alternatif belajar lain, teman-teman bisa memilih vue atau angular. Tapi kami sangat menyarankan untuk mempelajari dan mengunakan react" />
                <SourceBelajar resources={sources} />
                <ButtonBack linkBack="/frontend" />
            </div>
        </section>
    )
}