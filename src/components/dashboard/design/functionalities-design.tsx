import { ArrowDown, FileInput, FolderPlus } from "lucide-react";
import Image from "next/image";

export default function FunctionalitiesDesgin() {
  return (
    <section className="flex w-full justify-between">
      <div className="bg-[#F2F2F2] h-[400px] w-[346px] border-[#7E7F81] border-[0.5px] rounded-xl">
        <div className="h-[300px] border-b-[0.5px] border-[#7E7F81] w-full flex flex-col justify-center items-center gap-3">
          <div className="flex items-center gap-4 bg-gradient-to-t from-[#0F1420] to-[#161A25] text-white px-10 py-4 rounded-xl">
            <FileInput className="stroke-[1.5px] size-8 shadow-lg" />
            <p className="text-2xl">Un devis ?</p>
          </div>

          <ArrowDown className="size-8" />

          <div className="flex items-center gap-4 bg-gradient-to-t from-[#0F1420] to-[#161A25] text-white px-10 py-4 rounded-xl">
            <FolderPlus className="stroke-[1.5px] size-8 shadow-lg" />
            <p className="text-2xl">New Deal</p>
          </div>
        </div>
        <div className="h-[100px] w-full flex justify-center items-center">
          <p className="text-xl">Rapidité et simplicité</p>
        </div>
      </div>

      <div className="bg-[#F2F2F2] h-[400px] w-[346px] border-[#7E7F81] border-[0.5px] rounded-xl">
        <div className="h-[300px] border-b-[0.5px] border-[#7E7F81] w-full relative">
          <div className="bg-white absolute bottom-0 left-[5%] h-[93%] w-[90%] p-6 rounded-t-xl">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <p>Compagnie</p>
                <div className="flex items-center pl-4 w-full h-8 rounded-md border-[0.5px] border-[#7E7F81] bg-[#F2F2F2]">
                  <p>Amazon</p>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <p>Object</p>
                <div className="flex items-center pl-4 w-full h-8 rounded-md border-[0.5px] border-[#7E7F81] bg-[#F2F2F2]">
                  <p>Amazon</p>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <p>Date</p>
                <div className="flex items-center pl-4 w-full h-8 rounded-md border-[0.5px] border-[#7E7F81] bg-[#F2F2F2]">
                  <p>Amazon</p>
                </div>
              </div>
              <div>
                <p>Status</p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[100px] w-full flex justify-center items-center">
          <p className="text-xl">Remplissez votre deal</p>
        </div>
      </div>

      <div className="bg-[#F2F2F2] h-[400px] w-[346px] border-[#7E7F81] border-[0.5px] rounded-xl">
        <div className="h-[300px] border-[#7E7F81] flex items-center justify-center animate-pingCustom">
          <div className="flex justify-center items-center h-5/6 w-[70%] rounded-full border-[0.5px] border-black shadow-xl animate-pingCustom">
            <div className="flex justify-center items-center h-[70%] w-[70%] rounded-full border-[0.5px] border-black shadow-xl animate-pingCustom">
              <div className="flex justify-center items-center h-[50%] w-[50%] rounded-full border-[0.5px] border-black shadow-xl animate-pingCustom">
                <Image
                  src="/dashboard/icons/deals_logo.svg"
                  width="0"
                  height="0"
                  sizes="100vw"
                  style={{ width: "auto", height: "auto" }}
                  alt="MyIDeals' logo"
                  className="shadow-white shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="h-[100px]  border-t-[0.5px] border-[#7E7F81] w-full flex justify-center items-center">
          <p className="text-xl">Au centre de vos suivis</p>
        </div>
      </div>
    </section>
  );
}
