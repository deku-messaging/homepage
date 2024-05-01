import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import DesktopNav from "./Components/Nav";
import Landing from "./Pages/Landing";
import MobileNav from "./Components/MobileNav";
import Footer from "./Components/Footer";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Router>
          <DesktopNav />
          <MobileNav />
          <Routes>
            <Route path="/" element={<Landing />} />
          </Routes>
          <Footer />
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
