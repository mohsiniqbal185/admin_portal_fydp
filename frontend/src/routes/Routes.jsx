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
  import ViewTokenTransactions from "../pages/viewTokenTransactions/viewTokenTransactions";
  import ViewTokenTransactionsByProperty from "../pages/viewTokenTransactions/viewTokenTransactionsByProperty";
  export const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/view_transactions" element={<ViewTransaction />} />
        <Route path='users'>
          <Route index element={<Users/>}/>
          <Route path=':profile' element= {<Profile/>}/>
        </Route>
        <Route path='view_token_transactions'>
          <Route index element={<ViewTokenTransactions/>}/>
          <Route path=':property_id' element= {<ViewTokenTransactionsByProperty/>}/>
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