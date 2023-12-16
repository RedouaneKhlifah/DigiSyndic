import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { Provider } from "react-redux";
import store from "./services/redux/store";
import RefreshToken from "./refreshToken";

function App() {
  // const dispatch = useDispatch();
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