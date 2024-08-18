import "./App.css";
import { Header } from "./components/Header";
import { Main } from "./components/Main";

function App() {
  return (
    <div className="flex flex-col gap-8">
      <Header />
      <Main />
    </div>
  );
}

export default App;
