import { Suspense } from "react";
import "./App.css";
import DaisyNav from "./Components/DaisyNav/DaisyNav";
import NavBar from "./Components/NavBar/NavBar";
import PricingOption from "./Components/PricingOption/PricingOption";

const pricingPromise = fetch('pricingData.json').then(res=> res.json())

function App() {
  return (
    <>
      <header>
        {/* <DaisyNav></DaisyNav> */}
        <NavBar></NavBar>
      </header>

      <main>
        <Suspense
          fallback={
            <span className="loading loading-infinity loading-lg"></span>
          }
        >
          <PricingOption pricingPromise={pricingPromise}></PricingOption>
        </Suspense>
      </main>
    </>
  );
}

export default App;
