import Home from "./components/Home/Home";
import "./App.css";
import { MoodDataProvider } from "./contexts/moodData/MoodDataProvider";
import AuthForm from "./components/AuthForm/AuthForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MultiStepForm from "./components/MultiStepForm/MultiStepForm";
import UserDataProvider from "./contexts/userData/UserDataProvider";
import RegisterForm from "./components/Register/RegisterForm";
import LoginForm from "./components/LoginForm/LoginForm";

function App() {
  return (
    <>
      {/* <h1>hello</h1> */}
      <UserDataProvider>
        <MoodDataProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />}>
                <Route path="logmood" element={<MultiStepForm />} />
              </Route>
              <Route path="register" element={<RegisterForm />} />
              <Route path="login" element={<LoginForm />} />
            </Routes>
          </BrowserRouter>
        </MoodDataProvider>
      </UserDataProvider>
    </>
  );
}

export default App;
