import ButtonBack from "@/app/components/buttonBack";
import CardDesc from "@/app/components/cardDesc";
import SourceBelajar from "@/app/components/sourceBelajar";
import TitlePage from "@/app/components/titlePage";

export default function Page() {
  const sources = [
    {
      icon: "link",
      detail: "Tutorial HTML - Petani Kode (Simple dan sederhana)",
      link: "https://www.petanikode.com/tutorial/html/",
    },
    {
      icon: "link",
      detail: "HTML Lengkap - Koding (Sangat direkomendasi - Materi Lengkap)",
      link: "https://kodi.ng/referensi/html",
    },
    {
      icon: "youtube",
      detail: "HTML Dasar - Web Programing Unpas (Rekomendasi untuk pemula)",
      link: "https://www.youtube.com/watch?v=NBZ9Ro6UKV8&list=PLFIM0718LjIVuONHysfOK0ZtiqUWvrx4F",
    },
    {
      icon: "link",
      detail: "HTML Lengkap - W3Schools (Berbahasa inggris)",
      link: "https://w3schools.com/html/",
    },
    {
      icon: "game",
      detail: "Introduction to HTML - Sololearn (Berbahasa inggris)",
      link: "https://www.sololearn.com/learn/courses/html-introduction",
    },
  ];
  return (
    <section id="main" className="container">
      <div className="hero-section space-y-8">
        <TitlePage title="HTML" linkBack="/frontend" backTo="Frontend" />
        <CardDesc desc="HTML (Hypertext Markup Language) adalah bahasa markup standar yang digunakan untuk menentukan struktur dan konten dari halaman web. Ini digunakan pada setiap pembuatan website. HTML adalah alur belajar yang wajib untuk setiap web developer, bukan hanya untuk frontend tapi juga untuk backend developer." />
        <SourceBelajar resources={sources} />
        <ButtonBack linkBack="/frontend" />
      </div>
    </section>
  );
}
