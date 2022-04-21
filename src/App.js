import "./App.css";
import "../node_modules/bootstrap/dist/js/bootstrap";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import Post from "./components/post/Post";
import Categories from "./components/categories/Categories";
import Pages from "./components/pages/Pages";
import ErrorPage from "./components/errorpage/ErrorPage";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Post />} />
        <Route path="/:id" element={<Categories />} />
        <Route path="/pages/:a" element={<Pages />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
