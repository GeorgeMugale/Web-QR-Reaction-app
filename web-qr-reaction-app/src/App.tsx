import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import About from "./Pages/About";
import Home from "./Pages/Home";
import MakePost from "./Pages/MakePost";
import ReviewPost from "./Pages/ReviewPost";
import ViewPost from "./Pages/ViewPost";

function App() {

  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route index element={ <Home /> } />
                <Route path="/home" element={<Home />} />
                <Route path="/contact" element={<About />} />
                <Route path="/makepost" element={<MakePost />} />
                <Route path="/reviewpost" element={<ReviewPost />} />
                <Route path="/viewpost" element={<ViewPost />} />
                <Route path="/*" element={ <div>Page Not Found</div>} />
            </Routes>
        </BrowserRouter>
    </>
  )

}

export default App;
