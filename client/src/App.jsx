import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/home/home";
import AllWatch from "./page/allwatch/allwatch";
import CharmJewellery from "./page/charmJewellery/charmJewellery";
import SignUp from "./page/signUp/SignUp";
import Login from "./page/login/Login"
import "./App.scss"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
library.add(fab, fas, far)
function App() {
  return (
    <div className="container">
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<SignUp/>}/>
        <Route path="/" element={<Home/>} />
        <Route path="/watches/all-watches" element={<AllWatch/>}/>
        <Route path="/jewelry/charms" element={<CharmJewellery/>}/>



      </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
