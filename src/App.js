import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Signup from "./pages/signup/Signup";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="users">
            <Route index element={<List />} />
            <Route path=":userId" element={<Single />} />
            <Route path="new" element={<New />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
