import ButtonBack from '@/app/components/buttonBack'
import CardDesc from '@/app/components/cardDesc'
import SourceBelajar from '@/app/components/sourceBelajar'
import TitlePage from '@/app/components/titlePage'

export default function Html() {
    const sources = [
        {icon: 'link', detail: "Panduan PostgreSQL untuk pemula - Dewaweb", link: "https://www.dewaweb.com/blog/apa-itu-postgresql/"},
        {icon: 'link', detail: "Tutorial PostgreSQL - Kelas Programer", link: "https://kelasprogrammer.com/tutorial-postgresql/"},
        {icon: 'youtube', detail: "Full course: PostgreSQL - Freecodecamp", link: "https://youtu.be/qw--VYLpxG4"},
    ]
    return (
        <section id="main" className="container">
            <div className="hero-section space-y-8">
                <TitlePage
                    title="PostgreSQL" 
                    linkBack="/backend" 
                    backTo="Backend" 
                />
                <CardDesc 
                    desc="PostgreSQL adalah sistem manajemen basis data relasional (RDBMS) yang open-source dan sangat powerful. PostgreSQL dikenal sebagai salah satu sistem manajemen basis data yang paling fleksibel dan handal dalam hal skalabilitas, performa, dan fitur-fiturnya. PostgreSQL menyediakan fitur-fitur yang sangat lengkap seperti support untuk indexing, transaksi, dan konsistensi data. PostgreSQL juga sangat kuat dalam hal keamanan dan dapat digunakan untuk mengelola data yang sangat besar dan kompleks. PostgreSQL juga dapat digunakan untuk mengelola data yang berbeda jenis, seperti data geospasial, data statistik, dan data waktu. PostgreSQL digunakan pada aplikasi yang memerlukan integritas data yang tinggi, seperti sistem manajemen inventori, sistem manajemen sumber daya, dll." 
                />
                <SourceBelajar resources={sources} />
                <ButtonBack linkBack="/backend" />
            </div>
        </section>
    )
}