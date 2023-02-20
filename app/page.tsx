import Button from "./components/button";
import alurBelajar from "@/lib/alurBelajar.json";

export default function Home() {
  return (
    <section id="main" className="container">
      <div className="hero-section">
        <div className="flex flex-col">
          <div className="w-full pb-6 md:py-12 text-center space-y-3 md:space-y-6 lg:space-y-7">
            <h1 className="heading-utama">Mulai perjalananmu dari sini!</h1>
            <h1 className="heading-kedua">Sebuah jalan untuk berkarya</h1>
          </div>
          <div className="w-full flex justify-center md:px-12">
            <div className="w-full card-color py-20 rounded-xl">
              <div className="w-full flex flex-col md:flex-row gap-8 justify-center px-6">
                {alurBelajar.map((alurDireksi, i) => (
                  <Button key={i} name={alurDireksi.alur} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
