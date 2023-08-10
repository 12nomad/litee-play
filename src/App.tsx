import { Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./screens/Home";
import GameDetail from "./screens/GameDetail";
import NotFound from "./screens/NotFound";

const App = () => {
  return (
    <>
      <header className="w-full bg-blue-500 mb-4">
        <NavBar />
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="games/:slug" element={<GameDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
