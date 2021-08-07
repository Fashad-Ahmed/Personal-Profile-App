import React from "react";
import Education from "./Education";
import Introduction from "./Introduction";
import Contact from "./Contact";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Profile.css";

export default function Profile() {
  return (
    <div id="container">
      <Router>
        <header>
          <div className="quoteoftheday">Profile</div>
          {/* <div className="name">Shah.</div> */}
        </header>

        <article>
          <div className="quote">
            <h1>A Coders Life: Problematic but Charismatic.</h1>
          </div>

          <div className="quoteby">
            <h4>Fashad Ahmed Siddique</h4>
          </div>
        </article>

        <footer>
          <div className="skills">
            <h6>Menu</h6>
            <ul>
              <li>
                <Link to="/">Introduction</Link>
              </li>
              <li>
                <Link to="/education">Education</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <Switch>
            <Route exact path="/">
              <Introduction />
            </Route>
            <Route exact path="/education">
              <Education />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
          </Switch>
        </footer>
      </Router>
    </div>
  );
}
