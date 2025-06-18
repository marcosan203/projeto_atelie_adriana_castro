

import Header from "../components/Header";
import Footer from "../components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Painel from "../pages/Painel";
import Login from "../pages/Login";
import PrivateRoute from "../components/Auth";

function App() {
  
  
  return (
    <BrowserRouter>
      <div className="Content flex min-h-screen flex-col">
        <Header/>
        <main className="flex flex-grow container mx-auto p-4 mt-[100px] px-[100px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/painel" element={
              <PrivateRoute>
                <Painel />
              </PrivateRoute>
            } />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        <Footer />
        
      </div>
    </BrowserRouter>
  );
}

export default App;
