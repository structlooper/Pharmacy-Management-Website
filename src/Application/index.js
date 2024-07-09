import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./header/header";
import Footer from "./footer/footer";
import SearchMedicine from "./pages/searchMedicine";
import MedicineDetails from "./pages/medicineDetails";


const App = () => {
    return (
        <Router>
            <div>
                <Header />
                <Routes>
                    <Route path="/pharmacy" element={<SearchMedicine />} />
                    <Route path="/pharmacy/medicineDetails/:suggestion" element={<MedicineDetails />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
