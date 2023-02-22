import ButtonBack from '@/app/components/buttonBack'
import CardDesc from '@/app/components/cardDesc'
import SourceBelajar from '@/app/components/sourceBelajar'
import TitlePage from '@/app/components/titlePage'

export default function Html() {
    const sources = [
        {icon: 'link', detail: "Tutorial NodeJS - Petani Kode (Simple dan sederhana)", link: "https://www.petanikode.com/tutorial/nodejs/"},
        {icon: 'youtube', detail: "Belajar NodeJS - Web Programing Unpas (Rekomendasi untuk pemula)", link: "https://www.youtube.com/watch?v=sSLJx5t4OJ4&list=PLFIM0718LjIW-XBdVOerYgKegBtD6rSfD"},
        {icon: 'youtube', detail: "NodeJS untuk pemula - Dea afrizal (Alternatif)", link: "https://www.youtube.com/watch?v=kLUI9LISP5k"},
        {icon: 'link', detail: "Introduction to NodeJS (Web resmi - Berbahasa inggris)", link: "https://nodejs.dev/en/learn/"},
        {icon: 'youtube', detail: "Crash course NodeJS - The Net Ninja (Berbahasa inggris)", link: "https://www.youtube.com/watch?v=zb3Qk8SG5Ms&list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU"},
    ]
    return (
        <section id="main" className="container">
            <div className="hero-section space-y-8">
                <TitlePage
                    title="NodeJS" 
                    linkBack="/backend" 
                    backTo="Backend" 
                />
                <CardDesc 
                    desc="Node.js adalah platform perangkat lunak open-source yang dikembangkan dengan menggunakan JavaScript. Node.js memungkinkan developer untuk menjalankan kode JavaScript di luar browser, misalnya di server atau aplikasi desktop. Node.js menyediakan lingkungan runtime JavaScript yang dapat digunakan untuk membuat aplikasi web, server, dan aplikasi mobile. Node.js juga menyediakan modul yang dapat digunakan untuk mengakses fungsi sistem operasi dan mengelola jaringan, file, dan basis data. Node.js sangat populer digunakan untuk membuat aplikasi web real-time yang memerlukan komunikasi yang cepat antara server dan klien." 
                />
                <SourceBelajar resources={sources} />
                <ButtonBack linkBack="/backend" />
            </div>
        </section>
    )
}