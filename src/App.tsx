import GameHeading from "./components/GameHeading";
import GamesList from "./components/GamesList";
import NavBar from "./components/NavBar";
import PlatformDropdown from "./components/PlatformDropdown";
import Sidebar from "./components/Sidebar";
import SortDropdown from "./components/SortDropdown";

const App = () => {
  return (
    <>
      <header className="w-full bg-blue-500">
        <NavBar />
      </header>
      <div className="grid md:grid-cols-5 text-white max-h-[calc(100vh_-_86px)] ">
        <aside className="hidden lg:block bg-gray-900 py-4 pl-8">
          <Sidebar />
        </aside>
        <main className="col-span-4 bg-gray-900 p-4">
          <GameHeading />
          <div className="flex items-center gap-4">
            <PlatformDropdown />
            <SortDropdown />
          </div>
          <GamesList />
        </main>
      </div>
    </>
  );
};

export default App;
