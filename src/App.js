import "./App.css";
import MainPage from "./Pages/MainPage";

function App() {
  localStorage.clear(); // Clears all localStorage data
  sessionStorage.clear(); // Clears all sessionStorage data
  console.log("Local Storage:", localStorage);
  console.log("Session Storage:", sessionStorage);

  return (
    <div>
      <MainPage />
    </div>
  );
}

export default App;
