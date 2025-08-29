import { bookListData } from "@/app/data";
import BookList from "../BookList";

function MainContent() {
  return (
    <>
      <div className="main-display h-132">
        <div className="grid grid-cols-[60%_40%] gap-4">
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
          <div className="continue-reading grid grid-row-[20%_80%] gap-4 justify-between text-center">
            <b className="font-semibold text-[29px]">Continue Reading</b>
            <div>
              <div className="rounded-2xl p-4 h-[380px] w-[350px] bg-[url('https://i.pinimg.com/736x/0c/a7/62/0ca762e9c5cecf5961d0773a3554a915.jpg')] bg-no-repeat bg-cover bg-center"></div>
              <b className="text-[24px]">Karate Kid</b>
            </div>
          </div>
        </div>
      </div>
      <div className="book-list">
        <BookList mainTitle="Top Rated Comics" bookList={bookListData} />
      </div>
    </>
  );
}

export default MainContent;
