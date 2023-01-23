import ButtonBack from '@/app/components/buttonBack'
import CardDesc from '@/app/components/cardDesc'
import CardNote from '@/app/components/cardNote'
import SourceBelajar from '@/app/components/sourceBelajar'
import TitlePage from '@/app/components/titlePage'

export default function Html() {
    const sources = [
        {icon: 'link', detail: "Tutorial Git - Petani Kode (Sangat rekomendasi dan sudah cukup satu blog)", link: "https://www.petanikode.com/nodejs-npm/"},
        {icon: 'youtube', detail: "Apa itu NPM - Web Programing Unpas (Rekomendasi untuk pemula)", link: "https://www.youtube.com/watch?v=WVHkBuiCcIs"},
        {icon: 'youtube', detail: "Tutorial nodejs (NPM) - PZN (Alternatif - Satu video)", link: "https://www.youtube.com/watch?v=7t7CJwQlmGc"},
        {icon: 'youtube', detail: "What is NPM - Coder coder (Rekomendasi - Berbahasa inggris)", link: "https://www.youtube.com/watch?v=P3aKRdUyr0s"},
    ]
    return (
        <section id="main" className="container">
            <div className="hero-section space-y-8">
                <TitlePage
                    title="NPM" 
                    linkBack="/frontend" 
                    backTo="Frontend" 
                />
                <CardDesc 
                    desc="NPM atau  Node Package Manager adalah sistem pengelola paket yang digunakan dalam pengembangan aplikasi JavaScript. npm dapat digunakan untuk mengunduh, menginstal, dan mengelola dependensi (library atau modul) yang dibutuhkan dalam sebuah proyek JavaScript. npm dikembangkan dan didukung oleh Node.js dan tersedia secara default ketika menginstall Node.js. npm memungkinkan developer untuk menggunakan paket yang dikembangkan oleh komunitas dan membagikannya dengan mudah ke dalam proyek mereka sendiri. npm juga memungkinkan developer untuk membagikan paket yang dikembangkan sendiri ke dalam komunitas." 
                />
                <CardNote desc="Tidak perlu untuk mempelajari terlalu jauh, cukup satu blog atau satu video saja" />
                <SourceBelajar resources={sources} />
                <ButtonBack linkBack="/frontend" />
            </div>
        </section>
    )
}