import { Grid2x2Check } from "lucide-react";
import Image from "next/image";

const reviewsDisplay = [
  {
    pp: "/dashboard/people/people01.webp",
    text: "Lorem ipsum dolor sit amet, consectetur adipscing elit",
  },
  {
    pp: "/dashboard/people/people02.webp",
    text: "Lorem ipsum dolor sit amet, consectetur adipscing elit",
  },
  {
    pp: "/dashboard/people/people03.webp",
    text: "Lorem ipsum dolor sit amet, consectetur adipscing elit",
  },
  {
    pp: "/dashboard/people/people04.webp",
    text: "Lorem ipsum dolor sit amet, consectetur adipscing elit",
  },
  {
    pp: "/dashboard/people/people05.webp",
    text: "Lorem ipsum dolor sit amet, consectetur adipscing elit",
  },
  {
    pp: "/dashboard/people/people06.webp",
    text: "Lorem ipsum dolor sit amet, consectetur adipscing elit",
  },
  {
    pp: "/dashboard/people/people01.webp",
    text: "Lorem ipsum dolor sit amet, consectetur adipscing elit",
  },
  {
    pp: "/dashboard/people/people02.webp",
    text: "Lorem ipsum dolor sit amet, consectetur adipscing elit",
  },
  {
    pp: "/dashboard/people/people03.webp",
    text: "Lorem ipsum dolor sit amet, consectetur adipscing elit",
  },
];

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="flex flex-col justify-center items-center mt-[80px] relative"
    >
      <Grid2x2Check className="stroke-[0.5px] size-20" />
      <div className="grid grid-cols-3 gap-8 mt-[80px]">
        {reviewsDisplay.map((item) => (
          <div
            key={item.text}
            className="bg-[#F6F6F6] w-[346px] h-[180px] flex flex-col justify-center px-6 gap-[15px] rounded-lg border-[0.25px] border-[#7E7F81]/50 shadow-md transition-all duration-500 hover:scale-105"
          >
            <Image
              src={item.pp}
              height={100}
              width={100}
              alt="people"
              className="size-12 rounded-full object-cover"
            />
            <p>{item.text}</p>
          </div>
        ))}
      </div>
      <div className="w-full bg-white h-44 absolute -bottom-10 opacity-100 blur-xl"></div>
      <p className="z-10 bg-[#F5F7F9] px-6 py-1.5 rounded-md">Voir plus</p>
    </section>
  );
}
