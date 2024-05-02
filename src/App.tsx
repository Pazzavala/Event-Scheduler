// import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './scenes/HomePage/HomePage.tsx';
import AboutPage from './scenes/AboutPage/AboutPage.tsx';
import SchdulePage from './scenes/SchedulePage/SchedulePage.tsx';
import AddEventPage from './scenes/AddEventPage/AddEventPage.tsx';
import UpdateEventPage from './scenes/UpdateEventPage/UpdateEventPage.tsx';
// import Header from './components/common/Header.tsx';
// import Footer from './components/common/Footer.tsx';
import Layout from './scenes/Layout/Layout.tsx';
import LoginPage from './scenes/LoginPage/LoginPage.tsx';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route
                        path='/'
                        element={<Navigate to='/HomePage' replace />}
                    />
                    <Route path='/AboutPage' element={<AboutPage />} />
                    <Route path='/AddEventPage' element={<AddEventPage />} />
                    <Route path='/HomePage' element={<HomePage />} />
                    <Route path='/LoginPage' element={<LoginPage />} />
                    <Route path='/SchedulePage' element={<SchdulePage />} />
                    <Route
                        path='/UpdateEventPage'
                        element={<UpdateEventPage />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
