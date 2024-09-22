import CardsCarousel from "@/components/CardsCarousel";

export default function Home() {
  const categories = ["Transportation", "Debit", "City Pass"];
  return (
    <>
      <div className="w-full h-full flex justify-center pt-[20%] bg-[url('/bg.jpg')] bg-cover bg-center">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold">Transportation Cards in Korea</h1>
          <section className="flex justify-between w-full h-16">
            {categories.map((category) => (
              <div className="flex items-center" key={category}>
                <h3>{category}</h3>
              </div>
            ))}
          </section>
          <CardsCarousel />
        </div>
      </div>
    </>
  );
}
