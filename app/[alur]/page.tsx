import CardList from "@/app/components/cardList";
import TitlePage from "@/app/components/titlePage";
import CardDesc from "@/app/components/cardDesc";
import CardNote from "@/app/components/cardNote";

import alurBelajar from "@/lib/alurBelajar.json";
import slugify from "@/lib/slugify";

export async function generateStaticParams() {
  return alurBelajar.map((al) => ({
    alur: al.alur,
  }));
}

async function getAlurBelajar(alur: string) {
  const alurBel = alurBelajar.find((al) => slugify(al.alur) === alur);

  return alurBel;
}

export default async function Page({ params }: { params: { alur: string } }) {
  const alurPage = await getAlurBelajar(params.alur);

  return (
    <section id="main" className="container">
      <div className="hero-section space-y-8">
        <TitlePage title={alurPage?.alur} linkBack="/" backTo="Home" />
        <CardDesc desc={alurPage?.deskripsi} />
        {alurPage?.catatan ? <CardNote desc={alurPage?.catatan} /> : ""}
        <div className="layout-grid">
          {alurPage?.subAlur.map((al, i) => (
            <CardList
              listNumber={i}
              linkTo={`/${slugify(alurPage.alur)}/${slugify(al)}`}
              jalur={al}
              key={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
