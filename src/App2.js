// import React from 'react';
// import HeroForm from "./components/Home/HeroForm";
// import TravelPlan from "./components/TravelPlan/TravelPlan";
import { PersistGate } from "redux-persist/integration/react"; // Import PersistGate
import { persistor, store } from "./redux/store"; // Importing  Redux store
import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";
// import TravelPlanUpdated from "./components/TravelPlanUpdated/TravelPlanUpdated";
import Home from "./pages/Home/Home";
import CreatePlan from "./pages/CreatePlan/CreatePlan";
// import LocationInfo from "./components/GeoLocationInfo/LocationInfo";
// import WrappedFoodPlacesMap from "./components/Google/RestuarantMap";
import MapContainer from "./components/Google/deprecated_MapContainer";
import WrappedFoodPlacesMap from "./components/Google/Restuarants";
import Trip from "./pages/Trip/Trip";
import Day_by_Day from "./pages/Day_by_Day/Day_by_Day";


import React, { useEffect } from "react";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Recommend from "./components/Recommend";
import ScrollToTop from "./components/ScrollToTop";
import About from "./components/About";
import Review from "./components/Review";
import scrollreveal from "scrollreveal";
import './styles.css';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Home />} />
      <Route
        path="/home"
        element={
          <>
            <Home />
          </>
        }
      />
      <Route
        path="/navbar"
        element={
          <>
            <Navbar />
          </>
        }
      />
      <Route
        path="/recommend"
        element={
          <>
            <Recommend />
          </>
        }
      />
      <Route
        path="/scrolltotop"
        element={
          <>
            <ScrollToTop />
          </>
        }
      />
      <Route
        path="/review"
        element={
          <>
            <Review />
          </>
        }
      />
      <Route
        path="/about"
        element={
          <>
            <About />
          </>
        }
      />
      <Route
        path="/footer"
        element={
          <>
            <Footer />
          </>
        }
      />
      
    </Route>
  )
);

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  );
}

export default App;
