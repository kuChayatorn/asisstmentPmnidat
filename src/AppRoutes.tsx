import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import ConsentPage from "./pages/ConsentPage"
import PersonalInformation from "./pages/PersonalInformation"
import Assist from "./pages/Assist"

const AppRoutes = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    {/* <Route path="/" element={<Home />} /> */}
                    <Route path="/" element={<Home />} />
                    <Route path="/assist" element={<Assist />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRoutes