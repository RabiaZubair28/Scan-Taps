import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Home }from "./pages/Home.jsx"
// import Shop  from "./pages/Shop.jsx"
import { Client }  from "./pages/Client.jsx"
// import { Signin } from "./pages/Signin.jsx"
import { Error } from "./components/Error.jsx"
import { User }  from "./pages/User.jsx"
import { Portal }  from "./pages/Portal.jsx"
import { Signin } from "./pages/Signin.jsx"
import "./App.css"

export const App = () => {
  return (
    <div>

    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        {/* <Route path="/home" element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/contact" element={<ContactForm />}></Route>
        <Route path="/signin" element={<Signin />}></Route> */}
        <Route path="/" element={<Signin />}></Route> 
        <Route path="/:name" element={<Client />}></Route>
        <Route path="/client/:id" element={<User />}></Route>
        <Route path="/portal/:username/:password" element={<Portal />}></Route>
        <Route path="*" element={<Error />}></Route>

      </Routes>
    </BrowserRouter>

    </div>
  )
}
export default App;
