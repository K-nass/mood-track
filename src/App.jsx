import Home from "./components/Home/Home";
import "./App.css";
import { MoodDataProvider } from "./contexts/MoodDataProvider";
import AuthForm from "./components/AuthForm/AuthForm";
import NavPage from "./components/NavPage/NavPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MultiStepForm from "./components/MultiStepForm/MultiStepForm";

function App() {
  return (
    <>
      {/* <h1>hello</h1> */}
      <MoodDataProvider>
        <BrowserRouter>
          <NavPage />
          <Routes>
            <Route path="/" element={<Home />}>
              <Route path="logmood" element={<MultiStepForm />} />
            </Route>
            <Route path="login" element={<AuthForm />} />
          </Routes>
        </BrowserRouter>
      </MoodDataProvider>
    </>
  );
}

export default App;
