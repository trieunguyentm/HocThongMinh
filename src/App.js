import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ClassPage from "./pages/ClassPage";

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/lop-6" element={<ClassPage classPage="6" />} />
                    <Route path="/lop-7" element={<ClassPage classPage="7" />} />
                    <Route path="/lop-8" element={<ClassPage classPage="8" />} />
                    <Route path="/lop-9" element={<ClassPage classPage="9" />} />
                    <Route path="/lop-10" element={<ClassPage classPage="10" />} />
                    <Route path="/lop-11" element={<ClassPage classPage="11" />} />
                    <Route path="/lop-12" element={<ClassPage classPage="12" />} />
                    <Route path="*" element={<Navigate replace to="/" />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}