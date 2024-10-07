import CardsCarousel from "@/components/CardsCarousel";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="w-full h-full flex flex-col justify-center items-center bg-[url('/bg.jpg')] bg-cover bg-right-bottom overflow-x-hidden">
        <div className="w-full h-[80%] flex flex-col items-center relative mt-28 max-sm:mt-10 mb-5">
          <div className="flex">
            <h1 className="max-sm:text-6xl max-md:text-7xl text-9xl font-bold mr-[40px] max-md:mr-[20px] text-white">
              Cards
            </h1>
            <h1 className="max-sm:text-6xl max-md:text-7xl text-9xl font-bold text-transparent bg-[url('/flag.jpg')] bg-clip-text bg-center">
              Korea
            </h1>
          </div>
          <CardsCarousel />
        </div>
        <Footer />
      </div>
    </>
  );
}
