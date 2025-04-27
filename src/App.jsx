//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import "./App.css";
import Header from "./Components/Header";
import Entry from "./Components/Entry";

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
            <div className="card mt-5 w-50 d-flex m-auto">
                <div className="card-header text-bg-primary d-flex justify-content-center align-items-center">
                    <Header />
                </div>
                <div className="card-body p-5">
                    <Entry />
                </div>
            </div>
        </>
    );
}

export default App;
