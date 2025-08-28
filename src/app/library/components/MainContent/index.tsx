import React from "react";

function MainContent() {
  return (
    <div>
      <div className="main-display h-132">
        <div className="grid grid-cols-[70%_30%] gap-4">
          <div className="relative rounded-2xl p-4 h-[480px] w-[684px] bg-[url('https://cdn.pixabay.com/photo/2024/06/22/16/55/ai-generated-8846672_1280.jpg')] bg-no-repeat bg-cover bg-center">
            <div className="absolute bottom-10 w-[90%] p-5">
              <div className="grid grid-cols-[70%_30%] gap-4 items-end">
                <div>
                  <p className="text-[24px] mb-2">Frank Miller</p>
                  <b className="text-[36px] leading-tight">
                    <span className="block">Batman:</span>
                    The Dark Knight
                  </b>
                </div>

                <div className="flex justify-center items-center bg-[#4A83F6] rounded-2xl h-[58px] w-[205px] cursor-pointer hover:bg-[#3a6ad1] transition">
                  <b className="text-center text-white">Read Now</b>
                </div>
              </div>
            </div>
          </div>
          <div className="continue-reading grid grid-row-[10%_90%] gap-4 justify-between text-center">
            <b className="font-semibold text-[29px]">Continue Reading</b>
            <div>
              <div className="rounded-2xl p-4 h-[380px] w-[350px] bg-[url('https://sdmntprsouthcentralus.oaiusercontent.com/files/00000000-2df4-61f7-8027-dae75ebf681e/raw?se=2025-08-28T11%3A17%3A57Z&sp=r&sv=2024-08-04&sr=b&scid=1ef01367-641b-51b6-87f8-01deb12e4fa0&skoid=c953efd6-2ae8-41b4-a6d6-34b1475ac07c&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-08-27T20%3A39%3A25Z&ske=2025-08-28T20%3A39%3A25Z&sks=b&skv=2024-08-04&sig=/5EJdzjK%2BZp%2BGC/Ea46ZIrL/gAVs96Mfx5azMgQT/HE%3D')] bg-no-repeat bg-cover bg-center"></div>
              <b className="text-[24px]">Karate Kid</b>
            </div>
          </div>
        </div>
      </div>
      <div className="book-list"></div>
    </div>
  );
}

export default MainContent;
