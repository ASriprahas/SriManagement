import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Login from "./components/Login";
import SidebarComp from "./components/SidebarComp";
import List_Emp_Components from "./components/List_Emp_Components";
import ManageEmployees from "./components/ManageEmployees";
import EmployeeComp from "./components/Employeecomp";
import HeaderComp from "./components/HeaderComp";
import FooterComp from "./components/FooterComp";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* LOGIN */}
        <Route
          path="/"
          element={<Login />}
        />

        {/* EMPLOYEES LIST */}
        <Route
          path="/employees"
          element={
            <div>
              <HeaderComp />
              <div className="d-flex">
                <SidebarComp />
                <div className="container-fluid main-content">
                  <List_Emp_Components />
                </div>
              </div>
              <FooterComp />
            </div>
          }
        />

        {/* MANAGE EMPLOYEES */}
        <Route
          path="/manage-employees"
          element={
            <div>
              <HeaderComp />
              <div className="d-flex">
                <SidebarComp />
                <div className="container-fluid main-content">
                  <ManageEmployees />
                </div>
              </div>
              <FooterComp />
            </div>
          }
        />

        {/* ADD EMPLOYEE */}
        <Route
          path="/add-employee"
          element={
            <div>
              <HeaderComp />
              <div className="d-flex">
                <SidebarComp />
                <div className="container-fluid main-content">
                  <EmployeeComp />
                </div>
              </div>
              <FooterComp />
            </div>
          }
        />

        {/* UPDATE EMPLOYEE */}
        <Route
          path="/update-employee/:id"
          element={
            <div>
              <HeaderComp />
              <div className="d-flex">
                <SidebarComp />
                <div className="container-fluid main-content">
                  <EmployeeComp />
                </div>
              </div>
              <FooterComp />
            </div>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;