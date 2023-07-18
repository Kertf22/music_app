import React from "react";
import MusicPlayer from "./components/MusicPlayer";
import { SideBar } from "./components/SideBar";
import { SideBarHeader } from "./components/SideBar/SideBarHeader";


const PageContent = () => {
  return (
    <>
      <div className="w-full h-full p-8 rounded-xl"></div>
    </>
  );
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="p-12 flex justify-center items-center ">
        <div className="bg-gray-900 w-full h-[80vh] max-w-7xl rounded-2xl">
          <div className="h-[calc(100%-112px)] w-full flex">
            <SideBar.Root>
              <SideBarHeader/>
            </SideBar.Root>
            <PageContent />
          </div>
          <MusicPlayer.Root >
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
