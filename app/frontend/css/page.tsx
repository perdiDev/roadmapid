import ButtonBack from '@/app/components/buttonBack'
import CardDesc from '@/app/components/cardDesc'
import CardNote from '@/app/components/cardNote'
import SourceBelajar from '@/app/components/sourceBelajar'
import TitlePage from '@/app/components/titlePage'

export default function Html() {
    const sources = [
        {icon: 'link', detail: "Tutorial CSS - Petani Kode (Simple dan sederhana)", link: "https://www.petanikode.com/tutorial/css/"},
        {icon: 'youtube', detail: "CSS Dasar - Web Programing Unpas (Rekomendasi untuk pemula)", link: "https://www.youtube.com/watch?v=CleFk3BZB3g&list=PLFIM0718LjIUBrbm6Gdh6k7ZUvPIAZm7p"},
        {icon: 'link', detail: "CSS Lengkap - W3Schools (Berbahasa inggris)", link: "https://w3schools.com/css/"},
        {icon: 'game', detail: "Introduction to CSS - Sololearn (Berbahasa inggris)", link: "https://www.sololearn.com/learn/courses/css-introduction"},
    ]
    return (
        <section id="main" className="container">
            <div className="hero-section space-y-8">
                <TitlePage
                    title="CSS" 
                    linkBack="/frontend" 
                    backTo="Frontend" 
                />
                <CardDesc 
                    desc="CSS (Cascading Style Sheets) adalah sebuah styling yang digunakan untuk mengatur tampilan dan desain dari halaman web yang dibuat menggunakan HTML. Dengan CSS, developer dapat mengatur elemen seperti warna, font, posisi, dll. CSS memungkinkan developer untuk memisahkan konten dari tampilan, sehingga lebih mudah untuk mengelola dan mengubah desain website. CSS juga memungkinkan developer untuk mengatur responsivitas website, sehingga website dapat terlihat baik di berbagai ukuran layar device." 
                />
                <CardNote 
                    desc="Tidak perlu untuk menguasai semuanya, cukup dasar-dasarnya"
                />
                <SourceBelajar resources={sources} />
                <ButtonBack linkBack="/frontend" />
            </div>
        </section>
    )
}