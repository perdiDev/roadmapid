import ButtonBack from '@/app/components/buttonBack'
import CardDesc from '@/app/components/cardDesc'
import SourceBelajar from '@/app/components/sourceBelajar'
import TitlePage from '@/app/components/titlePage'

export default function Html() {
    const sources = [
        {icon: 'link', detail: "Tutorial Git - Petani Kode (Simple dan sederhana)", link: "https://www.petanikode.com/tutorial/git/"},
        {icon: 'youtube', detail: "Belajar git & github - Web Programing Unpas (Rekomendasi untuk pemula)", link: "https://www.youtube.com/watch?v=lTMZxWMjXQU&list=PLFIM0718LjIVknj6sgsSceMqlq242-jNf"},
        {icon: 'youtube', detail: "Tutorial git dasar - Programer Zaman Now (Alternatif - Satu video)", link: "https://youtu.be/fQbTeNX1mvM"},
        {icon: 'youtube', detail: "Git & github for beginners - Freecodecamp (Rekomendasi - Berbahasa inggris)", link: "https://www.youtube.com/watch?v=RGOj5yH7evk"},
    ]
    return (
        <section id="main" className="container">
            <div className="hero-section space-y-8">
                <TitlePage
                    title="Git" 
                    linkBack="/backend" 
                    backTo="Backend" 
                />
                <CardDesc 
                    desc="Git adalah version control system (VCS) yang terdistribusi dan digunakan untuk melacak perubahan pada file komputer dan menyelaraskan kerja pada file tersebut antara beberapa orang. Git pertama kali dikembangkan oleh Linus Torvalds, yang juga merupakan pembuat sistem operasi Linux. Git memungkinkan developer untuk menyimpan versi dari kode mereka dan mengelola perubahan yang dibuat selama pengembangan. Git juga memungkinkan developer untuk bekerja secara bersama-sama pada proyek yang sama dengan menyelaraskan perubahan mereka secara real-time." 
                />
                <SourceBelajar resources={sources} />
                <ButtonBack linkBack="/backend" />
            </div>
        </section>
    )
}