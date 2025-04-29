//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import attractionDataList from "./data.js";
import "./App.css";
import Header from "./Components/Header";
import Entry from "./Components/Entry";

// eslint-disable-next-line no-unused-vars
const initialTestEntryData = {
    img: {
        src: "https://scrimba.com/links/travel-journal-japan-image-url",
        alt: "Mount Fuji",
    },
    title: "Mount Fuji",
    country: "Japan",
    googleMapsLink:
        "https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu",
    dates: "12 Jan, 2021 - 24 Jan, 2021",
    text: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
};

// Recap of JavaScript map()
const nums = [1, 2, 3, 4, 5];
const numsSquared = nums.map((n) => {
    return n * n;
});
console.log(numsSquared);

function App() {
    return (
        <>
            <div className="card mt-5 mb-5 w-50 d-flex m-auto">
                <div className="card-header text-bg-primary d-flex justify-content-center align-items-center">
                    <Header />
                </div>
                <div className="card-body p-4 pb-2">
                    {/* <Entry attractionData={initialTestEntryData} /> */}
                    {attractionDataList &&
                        attractionDataList.map((attraction, index) => {
                            return (
                                <Entry
                                    key={attraction.id}
                                    attractionData={attraction}
                                    attractionRequiresSeparator={
                                        attractionDataList.length > 1 &&
                                        index < attractionDataList.length - 1
                                    }
                                />
                            );
                        })}
                </div>
            </div>
        </>
    );
}

export default App;
