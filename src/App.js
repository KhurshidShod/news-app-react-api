import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SingleNews from "./pages/single-home-news";
import Business from "./pages/business";
import General from "./pages/general";
import Entertainment from "./pages/entertainment";
import Sports from "./pages/sports";
import Technology from "./pages/technology";
import Health from "./pages/health";
import Science from "./pages/science";
// import HomePage from "./pages/home";
const HomePage = React.lazy(() => import("./pages/home"));
// import Categories from "./pages/categories";

function App() {
  return (
    <Suspense>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="all/:id" element={<SingleNews />} />
          <Route path="business/:id" element={<SingleNews />} />
          <Route path="general/:id" element={<SingleNews />} />
          <Route path="entertainment/:id" element={<SingleNews />} />
          <Route path="sports/:id" element={<SingleNews />} />
          <Route path="technology/:id" element={<SingleNews />} />
          <Route path="health/:id" element={<SingleNews />} />
          <Route path="science/:id" element={<SingleNews />} />
          <Route path="/business" element={<Business />} />
          <Route path="/general" element={<General />} />
          <Route path="/entertainment" element={<Entertainment />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/health" element={<Health />} />
          <Route path="/science" element={<Science />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
