import React from "react";
import HomePage from "./pages/HomePage/HomePage";
import LayoutHome from "./components/LayoutHome/LayoutHome";

const App: React.FC = () => {
  return (
    <LayoutHome>
      <HomePage />
    </LayoutHome>
  );
};

export default App;
