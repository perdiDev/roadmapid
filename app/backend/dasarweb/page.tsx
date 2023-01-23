import ButtonBack from '@/app/components/buttonBack'
import CardDesc from '@/app/components/cardDesc'
import SourceBelajar from '@/app/components/sourceBelajar'
import TitlePage from '@/app/components/titlePage'

export default function Html() {
    const sources = [
        {icon: 'github', detail: "Repo PerdiDev", link: "https://github.com/perdiDev"},
        // {icon: 'youtube', detail: "YT-Web Programing Unpas", link: "https://youtube.com"},
        // {icon: 'github', detail: "Repo Unpas", link: "https://github.com/perdiDev"},
    ]
    return (
        <section id="main" className="container">
            <div className="hero-section space-y-8">
                <TitlePage 
                    title="Dasar Web" 
                    linkBack="/backend" 
                    backTo="Backend" 
                />
                <CardDesc 
                    desc="{ }" 
                />
                <SourceBelajar resources={sources} />
                <ButtonBack linkBack="/backend" />
            </div>
        </section>
    )
}