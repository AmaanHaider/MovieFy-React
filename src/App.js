import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import SimpleBottomNavigation from "./Components/Mainnav";
import Container from "@material-ui/core/Container";
import Trending from "./Components/Pages/Trending/Trending";
import Movies from "./Components/Pages/Movies/Movies";
import Search from "./Components/Pages/Search/Search";
import Series from "./Components/Pages/Series/Series";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Container>
          <Routes>
            <Route path="/" element={<Trending/>} exact />
            <Route path="movies" element={<Movies/>} />
            <Route path="series" element={<Series/>} />
            <Route path="search" element={<Search/>} />
          </Routes>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;
