import ButtonBack from '@/app/components/buttonBack'
import CardDesc from '@/app/components/cardDesc'
import CardNote from '@/app/components/cardNote'
import SourceBelajar from '@/app/components/sourceBelajar'
import TitlePage from '@/app/components/titlePage'

export default function Html() {
    const sources = [
        {icon: 'link', detail: "HTTP - Dicoding Blog", link: "https://www.dicoding.com/blog/perbedaan-http-dan-https/"},
        {icon: 'link', detail: "Apa itu domain - Hostinger", link: "https://www.hostinger.co.id/tutorial/apa-itu-domain/"},
        {icon: 'link', detail: "DNS - Hostinger", link: "https://www.niagahoster.co.id/blog/apa-itu-dns/"},
        {icon: 'youtube', detail: "Belajar HTTP - Programer Zaman Now (Optional)", link: "https://www.youtube.com/watch?v=92Rjzrq4oIg"},
        {icon: 'link', detail: "How does internet work - MDN (Lengkap - Berbahasa inggris)", link: "https://developer.mozilla.org/en-US/docs/Learn/Common_questions/How_does_the_Internet_work"},
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
                    desc="Mempelajari bagaimana internet bisa berkomunikasi dengan komputer yang ada didunia untuk menyediakan beragam informasi. Komunikasi tersebut memiliki standarisasi yang berlaku secara global. Dasar tersebut akan memberikan kemampuan pada browser untuk menampilkan informasi yang dibutuhkan oleh pengguna. Tambahannya, kita perlu mengetahui bagaimana informasi bisa diakses secara online melalui penamaan domain. Seperti google.com, youtube.com, github.io, dll." 
                />
                <CardNote desc="Cukup pahami bagaimana internet bekerja. Ini hanyalah pengetahuan dasar yang dibutuhkan untuk memulai perjalanan belajar frontend." />
                <SourceBelajar resources={sources} />
                <ButtonBack linkBack="/backend" />
            </div>
        </section>
    )
}