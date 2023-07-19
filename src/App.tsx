import React from "react";
import MusicPlayer from "./components/MusicPlayer";
import { SideBar } from "./components/SideBar";
import { SideBarHeader } from "./components/SideBar/SideBarHeader";
import { SideBarContent } from "./components/SideBar/SideBarContent";
import Header from "./components/Header";
import { useGlobalStore } from "./store/global";
import { HomeRoot } from "./pages/Home/HomeRoot";
import { SearchRoot } from "./pages/Search/SearchRoot";

const PageContent = ({ children }: { children: React.ReactNode }) => {

  const { page } = useGlobalStore();

  return (
    <>
      <div className="w-[calc(100%-256px)]  rounded-2xl">
        <Header.Root>
          <div className="flex justify-between items-center ">

            <div className="flex items-center gap-4 h-12">

              <Header.Controllers />

              {page.name === "search" && <Header.Search />}

            </div>

            <Header.User />
          </div>

          {page.name === "search" && <Header.SearchTags />}

          {page.hasTitle && <h1 className="text-white text-3xl font-bold">
            {page.title}
          </h1>}
        </Header.Root>


        <div className="relative h-[calc(100%-112px)]  overflow-y-auto">
          {children}
        </div>
      </div>
    </>
  );
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="flex justify-center items-center h-full">
        <div className="bg-gray w-full h-[80vh] max-w-7xl rounded-2xl m-auto border border-gray-400">
          <div className="h-[calc(100%-96px)] w-full flex">
            <SideBar.Root>
              <SideBarHeader />
              <SideBarContent />
            </SideBar.Root>
            <PageContent>
              {children}
            </PageContent>
          </div>
          <MusicPlayer.Root>
            <MusicPlayer.Info title="American Pie" artist="Elton Jon" />
            <MusicPlayer.Controlls />
            <MusicPlayer.Settings />
          </MusicPlayer.Root>
        </div>
      </div>
    </>
  );
};

function App() {
  const { page } = useGlobalStore();

  return (
    <>
      <Layout>
        {page.name === "home" && <HomeRoot />}
        {page.name === "search" && (<SearchRoot />)}

      </Layout>
    </>
  );
}

export default App;
