import React from 'react';
import { BrowserRouter as BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/common/Header';
import Footer from './components/common/Footer';

import Home from "./pages/Home";
import About from './pages/About';
import Gallery from './pages/Gallery';
import Services from './pages/Services';
import Testimonials from './pages/Testimonials';
import Clients from './pages/Clients';
import Pricing from './pages/Pricing';

export default function App() {
    return (
        <BrowserRouter basename="/">
            <Header />
            <Switch>
                <Route exact path={`${process.env.PUBLIC_URL + "/"}`} component={Home} />
                <Route exact path={`${process.env.PUBLIC_URL + "/about"}`} component={About} />
                <Route exact path={`${process.env.PUBLIC_URL + "/gallery"}`} component={Gallery} />
                <Route exact path={`${process.env.PUBLIC_URL + "/services"}`} component={Services} />
                <Route exact path={`${process.env.PUBLIC_URL + "/testimonials"}`} component={Testimonials} />
                <Route exact path={`${process.env.PUBLIC_URL + "/clients"}`} component={Clients} />
                <Route exact path={`${process.env.PUBLIC_URL + "/pricing"}`} component={Pricing} />
            </Switch>
            <Footer />
        </BrowserRouter>
    )
}