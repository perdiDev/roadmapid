import ButtonBack from '@/app/components/buttonBack'
import CardDesc from '@/app/components/cardDesc'
import SourceBelajar from '@/app/components/sourceBelajar'
import TitlePage from '@/app/components/titlePage'

export default function Html() {
    const sources = [
        {icon: 'link', detail: "HTTP-Dicoding Blog (Cukup dibaca dan tau aja, Tapi wajib)", link: "https://www.dicoding.com/blog/perbedaan-http-dan-https/"},
        {icon: 'youtube', detail: "Belajar HTTP-PZN (Video panjang, optional aja!)", link: "https://www.youtube.com/watch?v=92Rjzrq4oIg"},
    ]
    return (
        <section id="main" className="container">
            <div className="hero-section space-y-8">
                <TitlePage
                    title="Dasar Web" 
                    linkBack="/frontend"
                    backTo="Frontend" 
                />
                <CardDesc 
                    desc="Belajar tentang cara kerja website melalui jaringan internet, mengerti bagaimana browser beroperasi, serta memahami cara kerja DNS dan domain." 
                />
                <SourceBelajar resources={sources} />
                <ButtonBack linkBack="/frontend" />
            </div>
        </section>
    )
}