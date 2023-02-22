import ButtonBack from '@/app/components/buttonBack'
import CardDesc from '@/app/components/cardDesc'
import SourceBelajar from '@/app/components/sourceBelajar'
import TitlePage from '@/app/components/titlePage'

export default function Html() {
    const sources = [
        {icon: 'link', detail: "Belajar nextjs - Sikola Koding", link: "https://sekolahkoding.com/belajar/nextjs"},
        {icon: 'youtube', detail: "Belajar nextjs dari awal - Parsinta", link: "https://www.youtube.com/watch?v=hczYZs7fG9I&list=PLRKMmwY3-5MyVNCzavLajXccYMTBbWJS7"},
        {icon: 'youtube', detail: "Belajar fullstack dengan nextjs - Array Id (Rekomendasi tapi video panjang)", link: "https://www.youtube.com/watch?v=kproo1ezjH0"},
        {icon: 'link', detail: "Nextjs Handbook - Freecodecamp (Berbahasa inggris)", link: "https://www.freecodecamp.org/news/the-next-js-handbook/"},
        {icon: 'link', detail: "Nextjs react framework course - Freecodecamp (Berbahasa inggris)", link: "https://www.youtube.com/watch?v=KjY94sAKLlw"},
    ]
    return (
        <section id="main" className="container">
            <div className="hero-section space-y-8">
                <TitlePage
                    title="Nextjs" 
                    linkBack="/frontend" 
                    backTo="Frontend" 
                />
                <CardDesc 
                    desc="Next.js adalah sebuah framework JavaScript yang digunakan untuk membuat aplikasi web server-rendered. Next.js dikembangkan di atas React.js dan difokuskan pada pengembangan aplikasi dengan performa yang baik dan mudah digunakan. Next.js menyediakan fitur seperti server-side rendering, code splitting, dan hot module replacement yang membuat aplikasi yang dikembangkan menjadi lebih cepat dan skalabel. Next.js juga menyediakan fitur seperti dynamic routing dan static site generation yang membuat pengembangan aplikasi menjadi lebih mudah dan efisien. Dengan Next.js, developer dapat membuat aplikasi web yang performatif dan mudah digunakan tanpa harus mengelola infrastruktur server secara manual." 
                />
                <SourceBelajar resources={sources} />
                <ButtonBack linkBack="/frontend" />
            </div>
        </section>
    )
}