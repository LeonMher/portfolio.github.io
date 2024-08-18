import "./App.css";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import { PreLoader } from "./components/Preloader";

function App() {
  return (
    <>
      <PreLoader />
      <div className="flex flex-col gap-8">
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default App;
