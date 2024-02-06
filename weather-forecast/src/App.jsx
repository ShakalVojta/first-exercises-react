// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import { WeeklyForecast } from "./WeeklyForecast.jsx";

function App() {
  return (
    <>
      <div className="container">
        <h1>Weekly Weather Forecast</h1>
        <WeeklyForecast />
      </div>
    </>
  );
}

export default App;
