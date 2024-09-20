import CardsCarousel from "@/components/CardsCarousel";

export default function Home() {
  return (
    <>
      <div className="w-full h-full flex justify-center items-center">
        <div>
          <h1 className="text-4xl font-bold">Transportation Cards in Korea</h1>
          <section className="flex justify-between">
            <div>
              <h3>Transportation</h3>
            </div>
            <div>
              <h3>Debit</h3>
            </div>
            <div>
              <h3>City Pass</h3>
            </div>
          </section>
          <CardsCarousel />
        </div>
      </div>
    </>
  );
}
