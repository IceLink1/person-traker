import React from "react";
import "./styles/App.scss";
import AppRouter from "./router/AppRouter";
import DrawerAppBar from "./components/Navbar";
import PersonUpdate from "./pages/PersonUpdate/PersonUpdate";

function App() {
  return (
    <>
      <AppRouter />
      <DrawerAppBar />
    </>
  );
}

export default App;
