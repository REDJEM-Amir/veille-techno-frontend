import { IoMdAdd } from "react-icons/io";

export default function page() {
  return (
    <div className="relative flex flex-col w-[calc(100vw-260px)] h-[calc(100vh-3rem)]">
      <div className="relative flex items-center p-3 bg-black/25 w-full h-14">
        <div className="text-lg font-bold text-white px-3 py-[2px] hover:bg-white/20 hover:duration-300 duration-200 rounded-sm cursor-pointer">Mon tableau Trello</div>
      </div>
      <div className="relative flex flex-row px-[4px] overflow-x-auto overflow-y-hidden h-[calc(100vh-6.5rem)]">
        <div className="relative flex flex-col px-[6px] h-full w-[284px] mt-3">
          <div className="relative flex flex-col w-[272px] h-fit p-2 bg-[#101204] rounded-xl cursor-pointer">
            <div className="relative flex items-center py-1 px-3">
              <div className="text-[#b6c2cf] text-[14px] font-bold">À faire</div>
            </div>
          </div>
        </div>
        <div className="relative flex flex-col px-[6px] h-full w-[284px] mt-3">
          <div className="relative flex flex-col w-[272px] h-fit p-2 bg-[#101204] rounded-xl cursor-pointer">
            <div className="relative flex items-center py-1 px-3">
              <div className="text-[#b6c2cf] text-[14px] font-bold">En cours</div>
            </div>
          </div>
        </div>
        <div className="relative flex flex-col px-[6px] h-full w-[284px] mt-3">
          <div className="relative flex flex-col w-[272px] h-fit p-2 bg-[#101204] rounded-xl cursor-pointer">
            <div className="relative flex items-center py-1 px-3">
              <div className="text-[#b6c2cf] text-[14px] font-bold">Terminé</div>
            </div>
          </div>
        </div>
        <div className="relative flex flex-col px-[6px] h-full w-[284px] mt-3">
          <div className="relative flex flex-col w-[272px] h-fit p-2 bg-white/20 rounded-xl cursor-pointer">
            <div className="relative flex items-center py-1 px-2 gap-2">
              <IoMdAdd className="size-5 text-white"/>
              <div className="text-white text-[14px]">Ajoutez une autre liste</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
