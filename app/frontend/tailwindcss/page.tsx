import ButtonBack from '@/app/components/buttonBack'
import CardDesc from '@/app/components/cardDesc'
import SourceBelajar from '@/app/components/sourceBelajar'
import TitlePage from '@/app/components/titlePage'

export default function Html() {
    const sources = [
        {icon: 'link', detail: "Belajar tailwindcss - Sikola koding", link: "https://sekolahkoding.com/belajar/tailwind-css"},
        {icon: 'youtube', detail: "Belajar Tailwind - WPU", link: "https://www.youtube.com/watch?v=z3slaXqmkT0&list=PLFIM0718LjIUHFRMzPJ0wGjx9_NlC5d1h"},
        {icon: 'youtube', detail: "Learn tailwindcss - Freecodecamp (Berbahasa inggris)", link: "https://www.youtube.com/watch?v=ft30zcMlFao"},
    ]
    return (
        <section id="main" className="container">
            <div className="hero-section space-y-8">
                <TitlePage
                    title="Tailwindcss" 
                    linkBack="/frontend" 
                    backTo="Frontend" 
                />
                <CardDesc 
                    desc="Tailwind CSS adalah sebuah framework CSS yang dirancang untuk membantu developer dalam membuat desain yang cepat, responsif dan mudah dikelola. Tailwind menyediakan sejumlah class pre-defined yang dapat digunakan untuk mengatur tampilan elemen HTML seperti warna, ukuran, posisi, dll. Ini memungkinkan developer untuk mengelola desain dengan cara yang lebih efisien dan menghindari menulis CSS dari awal. Tailwind juga memiliki sistem grid yang responsif yang memudahkan dalam pembuatan layout yang sesuai dengan ukuran layar yang berbeda. Framework ini sangat cocok digunakan untuk proyek yang memerlukan desain cepat dan efisien." 
                />
                <SourceBelajar resources={sources} />
                <ButtonBack linkBack="/frontend" />
            </div>
        </section>
    )
}