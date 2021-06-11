import Router from "./router";
import theme from "./theme";
import { ThemeProvider } from '@material-ui/core/styles';
import { AuthContextProvider } from "./components/Auth/Context/AuthContext";
import axios from 'axios';
import "./App.css";

axios.defaults.withCredentials = true;

function App() {
  return (
    <AuthContextProvider>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </AuthContextProvider>
  );
}

export default App;
