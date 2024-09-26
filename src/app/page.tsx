import CardsCarousel from "@/components/CardsCarousel";

export default function Home() {
  return (
    <>
      <div className="w-full h-full flex justify-center items-center bg-[url('/bg.jpg')] bg-cover bg-right-bottom overflow-hidden">
        <div className="h-[80%] flex flex-col items-center relative mt-35 max-sm:mt-10">
          <div className="flex">
            <h1 className="max-sm:text-5xl max-md:text-7xl text-9xl font-bold mr-[40px] max-md:mr-[20px] text-white">
              Cards
            </h1>
            <h1 className="max-sm:text-5xl max-md:text-7xl text-9xl font-bold text-transparent bg-[url('/flag.jpg')] bg-clip-text bg-center bg-">
              Korea
            </h1>
          </div>
          <CardsCarousel />
        </div>
      </div>
    </>
  );
}
