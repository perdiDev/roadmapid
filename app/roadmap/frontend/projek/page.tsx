import ButtonBack from '@/app/components/buttonBack'
import CardDesc from '@/app/components/cardDesc'
import SourceBelajar from '@/app/components/sourceBelajar'
import TitlePage from '@/app/components/titlePage'

export default function Html() {
    const sources = [
        {icon: 'youtube', detail: "Membuat portfolio dengan tailwindcss - WPU", link: "https://www.youtube.com/watch?v=8Ea4oq8qFtM"},
        {icon: 'youtube', detail: "Twitter clone - ILW Yennefer (Berbahasa inggris)", link: "https://www.youtube.com/watch?v=5Wak0iyGCrc"},
        {icon: 'youtube', detail: "Landing page - Rowno Makhbub (Berbahasa inggris)", link: "https://www.youtube.com/watch?v=CiyoLLWumvQ"},
        {icon: 'youtube', detail: "Website vooting - Fahrezi Adha", link: "https://www.youtube.com/watch?v=IlNRFc2d2dU&t=2697s"},
    ]
    return (
        <section id="main" className="container">
            <div className="hero-section space-y-8">
                <TitlePage
                    title="Project akhir" 
                    linkBack="/frontend" 
                    backTo="Frontend" 
                />
                <CardDesc 
                    desc="Setelah menyelesaikan roadmap belajar ini, teman-teman harus mengunakan pengetahuan yang dimiliki untuk mebuat sebuah projek. Ada berbagai projek yang bisa teman-teman kerjakan untuk mengukur seberapa jauh kemampuanmu berkembang. Hal ini bersifat wajib agar teman-teman bisa melihat bagaimana hubungan dari setiap sub-roadmap yang telah teman-teman lalui." 
                />
                <SourceBelajar resources={sources} />
                <ButtonBack linkBack="/frontend" />
            </div>
        </section>
    )
}