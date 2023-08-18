import React from 'react';
import './App.scss'
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home_page";
import ClassPage from "./pages/class_page";
import { Provider } from 'react-redux';
import store from './redux/store';
import Profile from './pages/profile';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react'
import MyPage from './Test';

let persistor = persistStore(store)

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
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
            <Route path="/thong-tin-ca-nhan" element={<Profile />} />
            <Route path="/test" element={<MyPage />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </Routes>
        </BrowserRouter>
      </PersistGate >
    </Provider>
  )
}

