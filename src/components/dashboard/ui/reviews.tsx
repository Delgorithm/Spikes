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
    <section className="flex flex-col justify-center items-center mt-[80px]">
      <Grid2x2Check className="stroke-[0.5px] size-20" />
      <div className="grid grid-cols-3 gap-8 mt-[80px]">
        {reviewsDisplay.map((item) => (
          <div
            key={item.text}
            className="bg-[#F6F6F6] w-[346px] h-[180px] flex flex-col justify-center px-6 gap-[15px] rounded-lg border-[0.5px] border-[#7E7F81] shadow-lg"
          >
            <Image
              src={item.pp}
              height={100}
              width={100}
              alt="people"
              className="size-12 rounded-full"
            />
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
