import ButtonBack from "@/app/components/buttonBack";
import CardDesc from "@/app/components/cardDesc";
import CardNote from "@/app/components/cardNote";
import SourceBelajar from "@/app/components/sourceBelajar";
import TitlePage from "@/app/components/titlePage";

import dataSubalurBelajar from "@/data/subAlurBelajar.json";
import slugify from "@/lib/slugify";

export async function generateStaticParams() {
  return dataSubalurBelajar?.map((subAlurBelajar) => ({
    alur: slugify(subAlurBelajar.alur),
    subalur: slugify(subAlurBelajar.subalur),
  }));
}

async function getSubalurBelajar(alur: string, subalur: string) {
  const subalurBelajar = dataSubalurBelajar.find(
    (subAl) => slugify(subAl.alur) == alur && slugify(subAl.subalur) == subalur
  );

  return subalurBelajar;
}

export default async function Page({
  params,
}: {
  params: { alur: string; subalur: string };
}) {
  const alurBelajarTerpilih = await getSubalurBelajar(
    params.alur,
    params.subalur
  );
  return (
    <section id="main" className="container">
      <div className="hero-section space-y-8">
        <TitlePage
          title={alurBelajarTerpilih?.subalur}
          linkBack={`/${slugify(alurBelajarTerpilih?.alur)}`}
          backTo={alurBelajarTerpilih?.alur}
        />
        <CardDesc desc={alurBelajarTerpilih?.deskripsi} />
        {alurBelajarTerpilih?.catatan ? (
          <CardNote desc={alurBelajarTerpilih?.catatan} />
        ) : (
          ""
        )}
        <SourceBelajar resources={alurBelajarTerpilih?.sumberBelajar} />
        <ButtonBack linkBack={`/${slugify(alurBelajarTerpilih?.alur)}`} />
      </div>
    </section>
  );
}
