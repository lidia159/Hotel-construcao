import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home  from "./Pages/Home/Home";

import Contato from "./Pages/Contato/Contato";
import Quartos from "./Pages/Quartos/Quartos";

function  AppRoutes () {
return (
    <BrowserRouter>
    <Routes>

        <Route path="/" element={ <Home />} ></Route>
        <Route path="/contato" element={ <Contato />} ></Route>
        <Route path="/quartos" element={ <Quartos />} ></Route>

    </Routes>
    </BrowserRouter>
)
}

export default AppRoutes