import Image from "next/image";
import SidebarLink from "./SidebarLink";
import { HomeIcon } from "@heroicons/react/solid";
import {
  HashtagIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  ClipboardListIcon,
  UserIcon,
  DotsCircleHorizontalIcon,
  DotsHorizontalIcon,
} from "@heroicons/react/outline";
const Sidebar = () => {
  return (
    <div className="fixed hidden h-full flex-col items-center p-2 sm:flex xl:w-[340px] xl:items-start">
      <div className="hoverAnimation flex h-14 w-14 items-center justify-center p-0 xl:ml-24">
        <Image
          src={"/assets/twitter-icon-svg-28.jpeg"}
          width={30}
          height={30}
        />
      </div>
      <div className="mt-4 mb-2.5 space-y-2.5 xl:ml-24">
        <SidebarLink text="Home" Icon={HomeIcon} active />
        <SidebarLink text="Explore" Icon={HashtagIcon} />
        <SidebarLink text="Notifications" Icon={BellIcon} />
        <SidebarLink text="Messages" Icon={InboxIcon} />
        <SidebarLink text="Bookmarks" Icon={BookmarkIcon} />
        <SidebarLink text="Lists" Icon={ClipboardListIcon} />
        <SidebarLink text="Profile" Icon={UserIcon} />
        <SidebarLink text="More" Icon={DotsCircleHorizontalIcon} />
      </div>
      <button className="ml-auto hidden h-[52px] w-56 rounded-full bg-[#1d9bf0] text-lg font-bold text-white shadow-md hover:bg-[#1a8cda] xl:inline">
        Tweet
      </button>
      <div
        className="hoverAnimation mt-auto ml-auto flex items-center justify-center text-[#d9d9d9] 
         xl:ml-auto xl:-mr-5
      "
      >
        <img
          src="https://media.istockphoto.com/photos/silhouette-of-profile-guy-in-shirt-with-white-button-in-aqua-menthe-picture-id1206439390?k=20&m=1206439390&s=170667a&w=0&h=wDX4xov95UOzjOgOkTqRurDiTepjhqAA7Q2iFofrO5c="
          alt=""
          className="h-10 w-10 rounded-full xl:mr-2.5"
        />
        <div className="hidden leading-5 xl:inline">
          <h4 className="font-bold">Alireza</h4>
          <p className="text-[#6e767d]">@Alirza.Adabi</p>
        </div>
        <DotsHorizontalIcon className="ml-10 hidden h-5 xl:inline" />
      </div>
    </div>
  );
};

export default Sidebar;
