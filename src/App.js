import React from "react";
import { BiLogIn } from "react-icons/bi";
import { Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import Login from "./components/logsign/Login";
import Signup from "./components/logsign/Signup";
import { UserAuthContextProvider } from "./components/context/UserAuthContext";
import ProtectedRoute from "./components/logsign/ProtectedRoute";

function App() {
  return (
    <div className="App">
      <UserAuthContextProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
        </Routes>
      </UserAuthContextProvider>
    </div>
  );
}
export default App;
