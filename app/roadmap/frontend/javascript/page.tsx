import ButtonBack from '@/app/components/buttonBack'
import CardDesc from '@/app/components/cardDesc'
import CardNote from '@/app/components/cardNote'
import SourceBelajar from '@/app/components/sourceBelajar'
import TitlePage from '@/app/components/titlePage'

export default function Html() {
    const sources = [
        {icon: 'link', detail: "Tutorial Javascript - Petani Kode (Simple dan sederhana)", link: "https://www.petanikode.com/tutorial/javascript/"},
        {icon: 'youtube', detail: "Javascript Dasar - Web Programing Unpas (Rekomendasi untuk pemula)", link: "https://www.youtube.com/watch?v=RUTV_5m4VeI&list=PLFIM0718LjIWXagluzROrA-iBY9eeUt4w"},
        {icon: 'link', detail: "Javascript Lengkap - W3Schools (Berbahasa inggris)", link: "https://w3schools.com/js/"},
        {icon: 'game', detail: "Introduction to Javascript - Sololearn (Berbahasa inggris)", link: "https://www.sololearn.com/learn/courses/javascript-introduction"},
        {icon: 'github', detail: "30 days challanges of Javascript - Repos Github (Berbahasa inggris)", link: "https://github.com/Asabeneh/30-Days-Of-JavaScript"},
    ]
    return (
        <section id="main" className="container">
            <div className="hero-section space-y-8">
                <TitlePage
                    title="Javascript" 
                    linkBack="/frontend" 
                    backTo="Frontend" 
                />
                <CardDesc 
                    desc="JavaScript adalah bahasa pemrograman yang digunakan untuk menambahkan interaksi dan dinamika pada halaman web. JavaScript digunakan untuk mengontrol elemen HTML dan CSS, sehingga dapat membuat website lebih interaktif dan responsif. JavaScript juga digunakan untuk melakukan operasi pada data, seperti validasi form, pengambilan data dari server, dll. JavaScript biasanya dijalankan di browser, tetapi juga dapat dijalankan di server dengan menggunakan Node.js." 
                />
                <CardNote desc="Setelah mempelajari javascript, teman-teman bisa membuat satu atau lebih project agar dapat melihat dan memanfaatkan pengetahuan yang sudah didapat. Seperti misalnya membuat sebuah kalkulator sederhana." />
                <SourceBelajar resources={sources} />
                <ButtonBack linkBack="/frontend" />
            </div>
        </section>
    )
}