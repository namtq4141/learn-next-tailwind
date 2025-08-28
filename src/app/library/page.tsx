import BookmarkIcon from "@mui/icons-material/Bookmark";
import CommentIcon from "@mui/icons-material/Comment";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import WidgetsIcon from "@mui/icons-material/Widgets";
import { TextField } from "@mui/material";
import Image from "next/image";
import MainContent from "./components/MainContent";
import MenuList from "./components/MenuList";
export default async function LibraryPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return (
    <main className="bg-[#1D1D2A]">
      <div className="relative w-full h-20">
        <Image
          src="https://cdn1.fahasa.com/media/wysiwyg/Thang-08-2025/Header_29_1263x60.png"
          alt=""
          fill
        />
      </div>
      <div className="grid grid-cols-[25%_75%] gap-4">
        <div className="p-6 pl-10 border-r-2 border-[#282837]">
          <div className="grid grid-rows-[20%_60%_20%] gap-10">
            <h1 className="w-full pl-18 text-5xl font-bold mb-4 ">
              <span className="text-[#4A83F6] font-bold">Geek</span>out.
            </h1>
            <div>
              <MenuList
                menuList={[
                  {
                    icon: <WidgetsIcon fontSize="large" />,
                    label: "Dashboard",
                  },
                  {
                    icon: <LocalLibraryIcon fontSize="large" />,
                    label: "My Collections",
                  },
                  {
                    icon: <BookmarkIcon fontSize="large" />,
                    label: "Favourites",
                  },
                ]}
              />
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-[60%_40%] gap-2">
            <div className="py-2 w-[684px]">
              <TextField
                name="keySearch"
                fullWidth
                sx={{
                  borderRadius: 4,
                  bgcolor: "#D9D9D9",
                }}
              />
            </div>
            <div className="p-2 pr-14 flex justify-end gap-10 items-center">
              <NotificationsActiveIcon fontSize="large" />
              <div className="w-14 h-14 bg-blue-500 rounded-full flex justify-center items-center">
                <InsertEmoticonIcon fontSize="large" />
              </div>
            </div>
          </div>
          <div className="py-4">
            <MainContent />
          </div>
        </div>
      </div>

      <div className="fixed w-16 h-16 bg-blue-500 rounded-full bottom-4 right-4 flex justify-center items-center hover:shadow-lg transition-shadow duration-300 cursor-pointer">
        <CommentIcon fontSize="large" />
      </div>
    </main>
  );
}
