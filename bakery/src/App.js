import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";

import RecipesDetailPage from "./components/RecipesDetailPage/RecipesDetailPage"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/home" />}/>
          <Route path="home" element={<Home />}/>
          <Route path="recipes/:id" element={<RecipesDetailPage/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;