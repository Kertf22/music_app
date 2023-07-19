import React from "react";
import MusicPlayer from "./components/MusicPlayer";
import { SideBar } from "./components/SideBar";
import { SideBarHeader } from "./components/SideBar/SideBarHeader";
import { SideBarContent } from "./components/SideBar/SideBarContent";
import { Header } from "./components/Header";
import Home from "./pages/Home";

const PageContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="w-full  rounded-2xl">
        <Header />
        <div className="relative h-[calc(100%-112px)]  overflow-auto">{children}</div>
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
              <Home.Root />
            </PageContent>
          </div>
          <MusicPlayer.Root>
            <MusicPlayer.Info />
            <MusicPlayer.Controlls />
            <MusicPlayer.Settings />
          </MusicPlayer.Root>
          {children}
        </div>
      </div>
    </>
  );
};

function App() {
  return (
    <>
      <Layout>
        {/* <p className="text-white">Welcome to Music APP</p> */}
      </Layout>
    </>
  );
}

export default App;
