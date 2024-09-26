import CardsCarousel from "@/components/CardsCarousel";

export default function Home() {
  return (
    <>
      <div className="w-full h-full flex justify-center items-center bg-[url('/bg.jpg')] bg-cover bg-right-bottom overflow-hidden">
        <div className="flex flex-col items-center relative">
          <div className="flex">
            <h1 className="max-md:text-7xl text-9xl font-bold mr-10 text-white">
              Cards
            </h1>
            <h1 className="max-md:text-7xl text-9xl font-bold text-transparent bg-[url('/flag.jpg')] bg-clip-text bg-center bg-">
              Korea
            </h1>
          </div>
          <CardsCarousel />
        </div>
      </div>
    </>
  );
}
