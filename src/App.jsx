//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import "./App.css";
import Header from "./Components/Header";

/**
 * Challenge:
 *
 * - Create an App component in a separate file.
 *   Import it here and render it
 * - Create a "components" folder and a Header component.
 *   Render the Header inside the App component.
 * - Follow the Travel Journal design to build the Header
 *   for our page.
 */

function App() {
    return (
        <>
            <div>
                <Header />
            </div>
        </>
    );
}

export default App;
