import ButtonBack from '@/app/components/buttonBack'
import CardDesc from '@/app/components/cardDesc'
import SourceBelajar from '@/app/components/sourceBelajar'
import TitlePage from '@/app/components/titlePage'

export default function Html() {
    const sources = [
        {icon: 'link', detail: "Langkah pengujian web - Webzid", link: "https://webzid.com/6-langkah-untuk-pengujian-aplikasi-web/"},
        {icon: 'youtube', detail: "Siapa yang membuat test? - Programer Zaman Now", link: "https://www.youtube.com/watch?v=94VbdqYziHU"},
        {icon: 'link', detail: "What is software testing - Guru99 (Berbahasa inggris)", link: "https://www.guru99.com/software-testing-introduction-importance.html"},
    ]
    return (
        <section id="main" className="container">
            <div className="hero-section space-y-8">
                <TitlePage
                    title="Testing" 
                    linkBack="/backend"
                    backTo="Backend" 
                />
                <CardDesc 
                    desc="Testing pada pengembangan website adalah proses melakukan uji coba terhadap aplikasi web untuk memastikan bahwa aplikasi tersebut berfungsi dengan baik dan memenuhi spesifikasi yang ditentukan. Ada beberapa jenis testing yang digunakan seperti Unit Testing, Integration Testing, Functional Testing, Performance Testing, dan Acceptance Testing. Unit testing melakukan uji coba pada unit-unit individual dari aplikasi, sedangkan integration testing melakukan uji coba bagaimana unit-unit bekerja sama. Functional testing melakukan uji coba pada fitur-fitur aplikasi dan performance testing melakukan uji coba pada kinerja aplikasi. Acceptance testing melakukan uji coba dari perspektif pengguna untuk memastikan bahwa aplikasi memenuhi persyaratan yang ditentukan dan diterima oleh pengguna. Testing sangat penting karena memungkinkan ditemukannya kesalahan sebelum aplikasi di-launch dan digunakan oleh pengguna, sehingga menjamin kualitas aplikasi dan kepuasan pengguna." 
                />
                <SourceBelajar resources={sources} />
                <ButtonBack linkBack="/backend" />
            </div>
        </section>
    )
}