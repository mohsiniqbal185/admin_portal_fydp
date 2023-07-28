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
import Layout from "../Layout";
import SignUpForm from "../components/SignUpForm/SignUpForm";
import SignInForm from "../components/SignInForm/SignInForm";
import Settings from "../pages/settings/Settings";
import ViewTokenTransactions from "../pages/viewTokenTransactions/ViewTokenTransactions";
import ViewRentalTransactions from "../pages/viewRentalTransactions/ViewRentalTransactions";
import ManageTokenTransactions from "../pages/manageTokenTransactions/ManageTokenTransactions";
import ManageRentalTransactions from "../pages/manageRentalTransactions/ManageRentalTransactions";
import TokenPayments from "../pages/tokenPayments/TokenPayments";
import EditProperty from "../pages/editProperty/EditProperty";
import CreateProperty from "../pages/createProperty/CreateProperty";
import TokenMarketSale from "../pages/tokenMarketSale/TokenMarketSale";

  const AppLayout = ()=>{
    return(
      <Layout>
        <Outlet/>
      </Layout>
    )
  }

  export const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route
          path="/login"
          element={<SignInForm />}
        />
        <Route path="/sign-up" element={<SignUpForm />} />
      <Route path="/*" element={<AppLayout/>}> 
        <Route index element={<Home/>}/>
        <Route path="view_transactions" element={<ViewTransaction />} />
        <Route path='users'>
          <Route index element={<Users/>}/>
          <Route path=':profile' element= {<Profile/>}/>
        </Route>
        <Route path="view-transactions-token" element={<ViewTokenTransactions/>}/>
        <Route path="view-transactions-rental" element={<ViewRentalTransactions/>}/>
        <Route path="manage-transactions-token" element={<ManageTokenTransactions/>}/>
        <Route path="manage-transactions-rental" element={<ManageRentalTransactions/>}/>
        <Route path="view-payments-token" element={<TokenPayments/>}/>
        <Route path="edit-property" element={<EditProperty/>}/>
        <Route path="create-property" element={<CreateProperty/>}/>
        <Route path="token-market-sale" element={<TokenMarketSale/>}/>
        <Route path="settings" element={<Settings/>}/>
      </Route>

      </>


    )
    );