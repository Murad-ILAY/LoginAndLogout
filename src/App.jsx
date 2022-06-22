import { Routes, Route } from "react-router-dom"
import Home from "./views/Home"
import Products from "./views/Products"
import Header from "./components/Header"
import Login from "./views/Login"
import { useState } from "react"
import PrivateRoute from "./privateRoute/PrivateRoute"
function App() {

  const [state, setState] = useState(true)

  const email = localStorage.getItem("emailData");
  const password = localStorage.getItem("passwordData")

  return (
    <>

      {

        email && password ?
          (<Home />) : (<Login />)

      }

    </>
  );
}

export default App;



// {
//   state ? <>
//     (
//     <Header />
//     <Routes>
//       <Route path="/" element={<Home />} />
//       {/* <Route path="product" element={<Products />} />
//       <Route path="/*" element={<NotFound />} /> */}
//     </Routes>

//   </> : <Routes> <Route path="/login" element={<Login />} /></Routes>
// }