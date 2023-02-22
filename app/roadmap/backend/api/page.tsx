import ButtonBack from '@/app/components/buttonBack'
import CardDesc from '@/app/components/cardDesc'
import SourceBelajar from '@/app/components/sourceBelajar'
import TitlePage from '@/app/components/titlePage'

export default function Html() {
    const sources = [
        {icon: 'link', detail: "Pengenalan api - Sikola Koding", link: "https://sekolahkoding.com/kelas/belajar-api/video/belajar-apa-itu-api"},
        {icon: 'youtube', detail: "Belajar api, json - WPU", link: "https://www.youtube.com/watch?v=vQJJ_K1JbEA&list=PLJ_2_JcZ_v8ZoSePsWiWfEDQIDhX92m4A"},
        {icon: 'youtube', detail: "API for beginners - Freecodecamp", link: "https://www.youtube.com/watch?v=GZvSYJDk-us"},
    ]
    return (
        <section id="main" className="container">
            <div className="hero-section space-y-8">
                <TitlePage
                    title="API" 
                    linkBack="/backend" 
                    backTo="Backend" 
                />
                <CardDesc 
                    desc="API (Application Programming Interface) adalah sebuah mekanisme yang memungkinkan aplikasi atau sistem untuk saling berkomunikasi dan berinteraksi dengan satu sama lain. API menyediakan sebuah antarmuka yang dapat digunakan oleh aplikasi untuk mengakses fitur atau data dari sistem lain.
                    API dapat digunakan untuk mengintegrasikan aplikasi atau sistem yang berbeda, misalnya mengambil data dari sebuah website atau sistem lain untuk digunakan dalam aplikasi Anda. API juga dapat digunakan untuk menyediakan akses ke fitur tertentu dari aplikasi Anda kepada pengembang lain untuk digunakan dalam aplikasi mereka sendiri." 
                />
                <SourceBelajar resources={sources} />
                <ButtonBack linkBack="/backend" />
            </div>
        </section>
    )
}