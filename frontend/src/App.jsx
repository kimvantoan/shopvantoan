import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import UserLayout from "./layouts/userLayout/UserLayout";
import { adminRouter, userRouter } from "./routes/router";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useUserStore } from "./stores/userStore";
import AdminLayout from "./layouts/adminLayout/AdminLayout";
const App = () => {
  const { user } = useUserStore();
  const navigate = useNavigate();
  React.useEffect(() => {
    if (user) {
      if (user.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/");
      }
    }
  }, [user, navigate]);
  return (
    <div>
      <Routes>
        {user && user.role === "admin" && (
          <Route path="/admin" element={<AdminLayout />}>
            {adminRouter.map((route, index) => (
              <Route key={index} path={route.path} element={route.component} />
            ))}
          </Route>
        )}

        <Route path="/" element={<UserLayout />}>
          {userRouter.map((route, index) => (
            <Route key={index} path={route.path} element={route.component} />
          ))}
        </Route>
      </Routes>

      <ToastContainer
        position="top-center"
        autoClose={3000}
        limit={2}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Slide}
      />
    </div>
  );
};

export default App;
