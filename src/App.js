import { Outlet } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div>
        <NavBar/>
      <CssBaseline />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;

