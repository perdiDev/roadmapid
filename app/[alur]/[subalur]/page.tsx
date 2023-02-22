import ButtonBack from "@/app/components/buttonBack";
import CardDesc from "@/app/components/cardDesc";
import SourceBelajar from "@/app/components/sourceBelajar";
import TitlePage from "@/app/components/titlePage";

import dataSubalurBelajar from "@/lib/subAlurBelajar.json";
import slugify from "@/lib/slugify";

export async function generateStaticParams() {
  return dataSubalurBelajar.map((subAlurBelajar) => ({
    alur: subAlurBelajar.alur,
    subalur: subAlurBelajar.subalur,
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
  console.log(alurBelajarTerpilih?.sumberBelajar);
  return (
    <section id="main" className="container">
      <div className="hero-section space-y-8">
        <TitlePage
          title={alurBelajarTerpilih?.subalur}
          linkBack="/frontend"
          backTo="Frontend"
        />
        <CardDesc desc={alurBelajarTerpilih?.deskripsi} />
        <SourceBelajar resources={alurBelajarTerpilih?.sumberBelajar} />
        <ButtonBack linkBack="/frontend" />
      </div>
    </section>
  );
}
