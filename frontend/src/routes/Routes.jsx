import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    Outlet,
  } from "react-router-dom";

  import ViewTransaction from "../components/viewTransaction";
  import Home from "../pages/home/Home";
  import Users from "../pages/users/users";
  import Profile from "../pages/Profile/profile";

  export const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/view_transactions" element={<ViewTransaction />} />
        <Route path='users'>
          <Route index element={<Users/>}/>
          <Route path=':profile' element= {<Profile/>}/>
        </Route>
        <Route
        path="/"
        element={
          <>
            <Home/>
          </>
        }
      />
      </>

    )
    );