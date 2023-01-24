import ButtonBack from '@/app/components/buttonBack'
import CardDesc from '@/app/components/cardDesc'
import CardNote from '@/app/components/cardNote'
import SourceBelajar from '@/app/components/sourceBelajar'
import TitlePage from '@/app/components/titlePage'

export default function Html() {
    const sources = [
        {icon: 'link', detail: "Apa itu cli? - Hostinger", link: "https://www.hostinger.co.id/tutorial/apa-itu-cli"},
        {icon: 'youtue', detail: "Terminal CLI dasar - Dea Afrizal", link: "https://www.youtube.com/watch?v=ClbWfffCYf4"},
        {icon: 'link', detail: "Command line crash course - MDN (Berbahasa inggris)", link: "https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"},
    ]
    return (
        <section id="main" className="container">
            <div className="hero-section space-y-8">
                <TitlePage
                    title="CLI" 
                    linkBack="/backend" 
                    backTo="Backend" 
                />
                <CardDesc 
                    desc="CLI (Command Line Interface) adalah sebuah antarmuka yang digunakan untuk mengontrol komputer atau sistem operasi dengan mengetik perintah pada command line atau prompt. CLI menyediakan akses langsung ke sistem operasi tanpa melalui antarmuka grafis yang biasa dilihat pada perangkat lunak atau aplikasi. CLI memungkinkan pengguna untuk mengeksekusi perintah yang kompleks, mengelola file dan folder, mengubah pengaturan sistem, dan melakukan tugas-tugas administratif lainnya dengan cepat dan efisien. " 
                />
                <CardNote 
                    desc="Cukup kuasai perintah-perintah dasar untuk memudahkan dalam proses pengelolahan codingan, file dan data." 
                />
                <SourceBelajar resources={sources} />
                <ButtonBack linkBack="/backend" />
            </div>
        </section>
    )
}