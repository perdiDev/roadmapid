import ButtonBack from '@/app/components/buttonBack'
import CardDesc from '@/app/components/cardDesc'
import SourceBelajar from '@/app/components/sourceBelajar'
import TitlePage from '@/app/components/titlePage'

export default function Html() {
    const sources = [
        {icon: 'link', detail: "Standar keamanan: OWASP - Dewaweb", link: "https://www.dewaweb.com/blog/owasp-standar-keamanan-web-app-dunia/"},
        {icon: 'youtube', detail: "JSON web token - Programer Zaman Now", link: "https://www.youtube.com/watch?v=_w9ixlwUsgg"},
        {icon: 'link', detail: "Security policy - MDN (Berbahasa inggris)", link: "https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP"},
    ]
    return (
        <section id="main" className="container">
            <div className="hero-section space-y-8">
                <TitlePage
                    title="Security" 
                    linkBack="/backend"
                    backTo="Backend" 
                />
                <CardDesc 
                    desc="Security untuk backend web developer merupakan proses yang digunakan untuk melindungi aplikasi web dari serangan dan ancaman keamanan, seperti autentikasi dan otorisasi yang aman, enkripsi data sensitif, validasi input, sanitasi dan escape dari input, patches dan update sistem, logging dan audit aktivitas, dan pengetesan keamanan secara berkala. Hal-hal tersebut dapat digunakan untuk mencegah akses yang tidak sah, mencegah serangan SQL injection, dan memastikan bahwa aplikasi selalu up-to-date dan aman dari ancaman keamanan." 
                />
                <SourceBelajar resources={sources} />
                <ButtonBack linkBack="/backend" />
            </div>
        </section>
    )
}