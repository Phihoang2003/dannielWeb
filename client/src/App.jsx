import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/home/home";
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
        <Route path="/" element={<Home/>} />
        



      </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
