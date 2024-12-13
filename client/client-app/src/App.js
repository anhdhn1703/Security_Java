import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import ProtectedRoute from "./util/ProtectedRoute";
import {useState} from "react";

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(
        !!localStorage.getItem("authToken")
    );
    return (
        <BrowserRouter>

            <Routes>
                <Route path="/login" element={<Auth onLogin={() => setIsAuthenticated(true)}/>}/>
                <Route
                    path="/"
                    element={
                        <ProtectedRoute>
                            {/*<Header/>*/}
                            <Home/>
                        </ProtectedRoute>
                    }/>
            </Routes>
        </BrowserRouter>
    );
}

export default App
