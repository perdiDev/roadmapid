import ButtonBack from '@/app/components/buttonBack'
import CardDesc from '@/app/components/cardDesc'
import SourceBelajar from '@/app/components/sourceBelajar'
import TitlePage from '@/app/components/titlePage'

export default function Html() {
    const sources = [
        {icon: 'link', detail: "Apa itu cache - Dicoding", link: "https://www.dicoding.com/blog/apa-itu-cache/"},
        {icon: 'youtube', detail: "Caching - Programer Zaman Now", link: "https://www.youtube.com/watch?v=GOlj04KHxxg"},
        {icon: 'youtube', detail: "Everything you need to know about caching - The Roadmap (Berbahasa inggris)", link: "https://www.youtube.com/watch?v=HiBDZgTNpXY"},
    ]
    return (
        <section id="main" className="container">
            <div className="hero-section space-y-8">
                <TitlePage
                    title="Caching" 
                    linkBack="/backend" 
                    backTo="Backend" 
                />
                <CardDesc 
                    desc="Caching adalah teknik penyimpanan data atau informasi yang sering digunakan dalam memori lokal, untuk jangka waktu tertentu. Jadi, pada saat yang sama, ketika klien meminta informasi yang sama, sebaliknya dari mengambil informasi dari database, akan memberikan informasi dari memori lokal. Keuntungan utama caching adalah meningkatkan kinerja dengan mengurangi beban pemrosesan." 
                />
                <SourceBelajar resources={sources} />
                <ButtonBack linkBack="/backend" />
            </div>
        </section>
    )
}