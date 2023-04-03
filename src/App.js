import Container from "./Components/Container";
import store from "./store/store";
import { Provider } from "react-redux";
function App() {
  return (
    <Provider store={store}>
      <Container />
    </Provider>
  );
}

export default App;
