import "./App.css";
import Header from "./components/header/header";
import About from "./components/about/about.jsx";
import Team from "./components/team/team";
import Signup from "./components/signup/signup";
import Footer from "./components/footer/footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contact from "./components/contact/contact";
import Alumni from "./components/alumni/alumni";
import Events from "./components/events/Events";

const sections = [
  { title: "About", url: "/about" },
  { title: "Team", url: "/team" },
  { title: "Events", url: "/events" },
  { title: "Contact", url: "/contact" },
  { title: "Sign Up", url: "/signup" },
  { title: "Opportunities", url: "/opportunities" },
  { title: "Alumni", url: "/alumni" },
];

function App() {
  return (
    <Router>
      <div>
        <Header sections={sections} />
        <Switch>
          <Route exact path="/">
            <About />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/team">
            <Team />
          </Route>
          <Route exact path="/events">
            <Events />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/alumni">
            <Alumni />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
