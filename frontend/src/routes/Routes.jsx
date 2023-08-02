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
import SingleViewTokenTransactions from "../pages/singleViewTokenTransactions/SingleViewTokenTransactions";
import SingleViewRentalTransactions from "../pages/singleViewRentalTransactions/SingleViewRentalTransactions";
import SingleManageTokenTransactions from "../pages/singleManageTokenTransactions/SingleManageTokenTransactions";
import SingleManageRentalTransactions from "../pages/singleManageRentalTransactions/SingleMangeRentalTransactions";
import SingleTokenPayments from "../pages/singleTokenPayments/SingleTokenPayments";
import ViewTokenTransactionsDetail from "../pages/viewTokenTransactionsDetail/ViewTokenTransactionsDetail";
import ManageTokenTransactionsDetail from "../pages/manageTokenTransactionsDetail/ManageTokenTransactionsDetail";
import TokenPaymentsDetail from "../pages/tokenPaymentsDetail/TokenPaymentsDetail";

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
      <Route path="/login" element={<SignInForm />}/>
      <Route path="/sign-up" element={<SignUpForm />} />
      <Route path="/*" element={<AppLayout/>}>
        <Route index element={<Home/>}/>
        <Route path="view_transactions" element={<ViewTransaction />} />
        <Route path='users'>
          <Route index element={<Users/>}/>
          <Route path=':profile' element= {<Profile/>}/>
        </Route>
        <Route path="view-transactions-token">
          <Route index element={<ViewTokenTransactions/>}/>
          <Route path=":projectId" element={<SingleViewTokenTransactions/>}/>
          <Route path=":projectId/:viewId" element={<ViewTokenTransactionsDetail/>}/>
        </Route>
        <Route path="view-transactions-rental">
          <Route index element={<ViewRentalTransactions/>}/>
          <Route path=":projectId" element={<SingleViewRentalTransactions/>}/>
        </Route>
        <Route path="manage-transactions-token">
          <Route index element={<ManageTokenTransactions/>}/>
          <Route path=":projectId" element={<SingleManageTokenTransactions/>}/>
          <Route path=":projectId/manage/:manageId" element={<ManageTokenTransactionsDetail/>}/>
        </Route>
        <Route path="manage-transactions-rental">
          <Route index element={<ManageRentalTransactions/>}/>
          <Route path=":projectId" element={<SingleManageRentalTransactions/>}/>
        </Route>
        <Route path="view-payments-token">
          <Route index element={<TokenPayments/>}/>
          <Route path=":projectId" element={<SingleTokenPayments/>}/>
          <Route path=":projectId/:paymentId" element={<TokenPaymentsDetail/>}/>
        </Route>
        <Route path="edit-property" element={<EditProperty/>}/>
        <Route path="create-property" element={<CreateProperty/>}/>
        <Route path="token-market-sale" element={<TokenMarketSale/>}/>
        <Route path="settings" element={<Settings/>}/>
      </Route>
      </>
    )
    );