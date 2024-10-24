import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Home }from "./pages/Home.jsx"
// import Shop  from "./pages/Shop.jsx"
import { Client }  from "./pages/Client.jsx"
// import { Signin } from "./pages/Signin.jsx"
import { Error } from "./components/Error.jsx"
import "./App.css"

export const App = () => {
  return (
    <div>

    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Error />}></Route>
        {/* <Route path="/home" element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/contact" element={<ContactForm />}></Route>
        <Route path="/signin" element={<Signin />}></Route> */}
        <Route path="/:name" element={<Client />}></Route>
  
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </BrowserRouter>

    </div>
  )
}
export default App;
