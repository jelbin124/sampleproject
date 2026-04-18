import "./App.css";
import CustInfo from "./components/CustInfo";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import { ConfirmProvider } from "material-ui-confirm";

function App() {
  return (
    <div className="App">
      <ConfirmProvider>
        <SnackbarProvider>
          <Router>
            <Routes>
              <Route path="/" element={<CustInfo />} />
            </Routes>
          </Router>
        </SnackbarProvider>
      </ConfirmProvider>
    </div>
  );
}

export default App;