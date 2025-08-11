import Home from "./components/Home/Home";
import "./App.css";
import { MoodDataProvider } from "./contexts/MoodDataProvider";

function App() {
  return (
    <>
      <MoodDataProvider>
        <Home />
      </MoodDataProvider>
    </>
  );
}

export default App;
