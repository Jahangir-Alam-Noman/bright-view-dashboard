import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
        </Routes>
      </BrowserRouter>
      {/* <Dashboard></Dashboard> */}
    </div>
  );
}

export default App;
