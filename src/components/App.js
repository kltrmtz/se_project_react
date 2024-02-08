// import logo from "./logo.svg";
import "../blocks/App.css";
import Header from "./Header.js";
import WeatherCard from "./WeatherCard.js";

function App() {
  return (
    <div>
      <Header />
      <main className="main">
        <WeatherCard day={false} type="storm" />
        <section id="card-section">Card Section</section>
      </main>
    </div>
  );
}

export default App;
