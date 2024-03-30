import { RouterProvider } from "react-router-dom";
import appRouter from "./routes";
import { Provider } from "react-redux";
import store from "./store/store";
import AppContext from "./context/AppContext";

function App() {
  return (
    <Provider store={store}>
      <AppContext>
        <RouterProvider router={appRouter} />
      </AppContext>
    </Provider>
  );
}

export default App;
