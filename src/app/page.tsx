import CardsCarousel from "@/components/CardsCarousel";

export default function Home() {
  return (
    <>
      <div className="w-full h-full flex justify-center items-center bg-[url('/bg.jpg')] bg-cover bg-center">
        <div className="flex flex-col items-center relative">
          <h1 className="text-9xl font-bold text-[#ffffff]">Cards Korea</h1>
          <CardsCarousel />
        </div>
      </div>
    </>
  );
}
