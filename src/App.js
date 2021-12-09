import "./scss/main.scss";
import Home from "./pages";
import MarketPlace from "./pages/marketPlace";
import MarketPlaceGallary from "./pages/marketPlaceGallery";
import {Route, Switch } from 'react-router-dom';
import Footer from "./pages/components/footer";

function App() {
  return (

    <div className="App">
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/market-place">
                <MarketPlace />
            </Route>
            <Route path="/market-place-gallery">
                <MarketPlaceGallary />
            </Route>
        </Switch>
        <Footer />
    </div>

      

  );
}

export default App;
