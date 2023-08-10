import GameHeading from "../components/home/GameHeading";
import GamesList from "../components/home/GamesList";
import PlatformDropdown from "../components/home/PlatformDropdown";
import Sidebar from "../components/home/Sidebar";
import SortDropdown from "../components/home/SortDropdown";

const Home = () => {
  return (
    <div className="min-h-screen">
      <aside className="text-white  bg-gray-900 pb-4 px-4 lg:px-8 md:pb-5 xl:pb-6">
        <Sidebar />
      </aside>

      <main className="text-white bg-gray-900 px-4 lg:px-8">
        <GameHeading />
        <div className="flex flex-wrap items-center gap-4 mb-4">
          <PlatformDropdown />
          <SortDropdown />
        </div>
        <GamesList />
      </main>
    </div>
  );
};

export default Home;
