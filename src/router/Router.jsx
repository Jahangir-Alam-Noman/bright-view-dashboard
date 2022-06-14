import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../components/Dashboard/Dashboard/Dashboard";
import AddItCourses from "../pages/AddItCourses";
import Payment from "../pages/Payment";
import Review from "../pages/Review";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route path="addItCourses" element={<AddItCourses />} />
            <Route path="payment" element={<Payment />} />
            <Route path="review" element={<Review />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
