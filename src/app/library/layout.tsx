"use client";

import MenuList from "./components/MenuList";
import TextFieldElement from "../components/TextFieldElement";
import { FormProvider, useForm } from "react-hook-form";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import CommentIcon from "@mui/icons-material/Comment";
import WidgetsIcon from "@mui/icons-material/Widgets";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import LogoutIcon from "@mui/icons-material/Logout";

export default function LibraryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const form = useForm();

  return (
    <FormProvider {...form}>
      <main className="bg-[#1D1D2A] min-h-screen box-border">
        <div className="grid grid-cols-[25%_75%] gap-4">
          {/* Sidebar */}
          <div className="p-6 pl-10 border-r-2 border-[#282837]">
            <div className="flex flex-col min-h-screen justify-between">
              <div>
                <h1 className="w-full pl-18 text-5xl font-bold mb-4 ">
                  <span className="text-[#4A83F6] font-bold">Geek</span>out.
                </h1>
                <div className="py-10">
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
              <div>
                <MenuList
                  menuList={[
                    {
                      icon: <SettingsApplicationsIcon fontSize="large" />,
                      label: "Settings",
                    },
                    { icon: <LogoutIcon fontSize="large" />, label: "Log out" },
                  ]}
                />
              </div>
            </div>
          </div>

          {/* Main Area */}
          <div className="p-4 flex flex-col">
            <div className="grid grid-cols-[60%_40%] gap-2">
              <div className="py-2 w-[684px]">
                <TextFieldElement
                  name="keySearch"
                  fullWidth
                  sx={{ borderRadius: 4, bgcolor: "#D9D9D9" }}
                />
              </div>
              <div className="p-2 pr-14 flex justify-end gap-10 items-center">
                <NotificationsActiveIcon fontSize="large" />
                <div className="w-14 h-14 bg-blue-500 rounded-full flex justify-center items-center">
                  <InsertEmoticonIcon fontSize="large" />
                </div>
              </div>
            </div>

            {/* Nội dung thay đổi */}
            <div className="flex-1">{children}</div>
          </div>
        </div>

        {/* Floating comment button */}
        <div className="fixed w-16 h-16 bg-blue-500 rounded-full bottom-4 right-4 flex justify-center items-center hover:shadow-lg transition-shadow duration-300 cursor-pointer">
          <CommentIcon fontSize="large" />
        </div>
      </main>
    </FormProvider>
  );
}
