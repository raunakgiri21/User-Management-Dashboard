import { Route, Routes } from "react-router-dom";
import Layout from "./components/shared/Layout";
import UserDetails from "./pages/UserDetails";
import AccountCreation from "./pages/AccountCreation";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <div className="bg-mainBGC min-h-screen h">
      <Routes>
        <Route
          path="/"
          element={<Layout />}
        >
          <Route
            index
            element={<HomePage />}
          />
          <Route
            path="user-details"
            element={<UserDetails />}
          />
          <Route
            path="account-creation"
            element={<AccountCreation />}
          />
        </Route>
      </Routes>
    </div>
  );
}
