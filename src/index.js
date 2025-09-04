import { createRoot } from "react-dom/client";
import App from "./App";
import store from "./utils/appStore";
import { Provider } from "react-redux";

const path = document.getElementById("root");
const root = createRoot(path);
root.render( 
<Provider store={store}>
    <App />
</Provider>) 