import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { Provider } from "react-redux";
import store from "./services/redux/store";
import RefreshToken from "./RefreshToken";

function App() {
  return (
    <>
      <Provider store={store}>
        <RefreshToken />
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}

export default App;
