import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NewOrderPage from "../NewOrderPage/NewOrderPage";
import AuthPage from "../AuthPage/AuthPage";
import OrderHistoryPage from "../OrderHistoryPage/OrderHistoryPage";
import NavBar from "../../components/NavBar/NavBar";

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <>
      <main className="App">
        <NavBar />
        {user ? (
          <>
            <Routes>
              // routes is another component that allows us to set up all of our
              different routes, it is a package built into react-router
              <Route path="/orders/new" element={<NewOrderPage />} /> // Route
              is always going to expect a path and an element(as the prop to
              pass down information) as the naming conventions
              <Route path="/orders" element={<OrderHistoryPage />} />
            </Routes>
          </>
        ) : (
          <AuthPage />
        )}
      </main>
    </>
  );
}
