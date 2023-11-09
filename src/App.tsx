import React from "react";
import HomePage from "./pages/HomePage/HomePage";
import LayoutHome from "./components/layout/LayoutHome";

const App: React.FC = () => {
  return (
    <LayoutHome>
      <HomePage />
    </LayoutHome>
  );
};

export default App;
