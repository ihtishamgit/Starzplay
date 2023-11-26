import { Routes, Route, useNavigate } from "react-router-dom";
import Layout from "./Common/Layout";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./Common/ErrorFallback";
import SkeletonHome from "./Common/Skeletons/SkeletonHome";
import { lazy, Suspense } from "react";
import "./App.css";
const HomePage = lazy(() => import("./Components/Carousel/CarouselContainer"));
function App() {
  const navigate = useNavigate();
  console.log("vjhh");
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
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
        </Route>
      </Routes>
    </>
  );
}

export default App;
