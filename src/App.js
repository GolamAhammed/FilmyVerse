import Header from "./Components/Header";
import Cards from "./Components/Cards";
import Detail from "./Components/Detail";
import AddMovie from "./Components/AddMovie";
import { Route,Routes } from "react-router-dom";



function App() {
  return (
    <div className= "App relative" >
      <Header/>
      <Routes>
              <Route path="/" element={<Cards/>} />
              <Route path="/Addmovie" element={<AddMovie/>} />
              <Route path="/detail/:id" element={<Detail/>} />
      </Routes>
    </div>
  );
}

export default App;
