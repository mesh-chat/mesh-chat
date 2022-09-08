import {Navigation} from "./src/screens/Navigation";
import {Provider} from "react-redux";
import store from "./src/redux/store";

export default function App() {
    return (
        <Provider store={store}>
            <Navigation/>
        </Provider>
    );
}
