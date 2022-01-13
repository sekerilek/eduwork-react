import IndexNav from "./Router";
import Aplikasi from "./BasicComponents/Aplikasi/Aplikasi";
import Styling from "./StylingComponents";
import RegistrationForm from "./FormValidation/RegistrationForm";
import NewsApp from "./Lifecycle";
import Home from "./Hooks/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Aplikasi /> */}
      {/* <Styling /> */}
      {/* <RegistrationForm /> */}
      {/* <NewsApp /> */}
      {/* <Home /> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexNav />} />
          <Route path="Basic" element={<Aplikasi />} />
          <Route path="StylingComponent" element={<Styling />} />
          <Route path="FormValidation" element={<RegistrationForm />} />
          <Route path="LifecycleComponent" element={<NewsApp />} />
          <Route path="Hooks" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <h1>welcome</h1>
    </div>
  );
}

export default App;
