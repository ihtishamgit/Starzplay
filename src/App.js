import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import Layout from "./Common/Layout";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./Common/ErrorFallback";
import SkeletonHome from "./Common/Skeletons/SkeletonHome";
import { lazy, Suspense } from "react";
import { ToastContainer, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { reactLocalStorage } from "reactjs-localstorage";
const HomePage = lazy(() => import("./Components/Carousel/CarouselContainer"));
function App() {
  const navigate = useNavigate();
  const auth = reactLocalStorage.getObject("token");
  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar
        transition={Flip}
      />
      <Routes>
        <Route path="/" element={<Layout />}>
          {auth?.accessToken ? (
            <Route
              index
              element={
                <ErrorBoundary
                  FallbackComponent={ErrorFallback}
                  onReset={() => navigate("/")}
                >
                  <Suspense fallback={<SkeletonHome />}>
                    <HomePage />
                  </Suspense>
                </ErrorBoundary>
              }
            />
          ) : (
            <>
              <Route path="/" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </>
          )}
        </Route>
      </Routes>
    </>
  );
}

export default App;
