import React from "react";
import nav from "../navbar";

function Header(props) {
  const { currentTab, handleTabChange } = props;

  return (
    <div>
      <section>
        <header className="flex-row px-1">
          <div>
            <h1>Ayush's Portfolio</h1>
          </div>
          <div>
            <nav
              currentTab={currentTab}
              handleTabChange={handleTabChange}
            ></nav>
          </div>
        </header>
      </section>
      <section class="hero">
        <div class="hero-cta">
          <h2>Welcome</h2>
          <p>
            Welcome to Ayush's portfolio
          </p>
        </div>
      </section>
    </div>
  );
}

export default Header;