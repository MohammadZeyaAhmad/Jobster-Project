
import styled from "styled-components";
import Wrapper from "../assets/wrappers/LandingPage"
import {Logo} from "../components"
import {Link} from "react-router-dom"
const Landing = () => {
  return (
    <Wrapper>
      <main>
        <Logo/>
        <div className="container page">
          {/* info */}
          <div className="info">
            <h1>
              job <span>tracking</span> app
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              quasi nemo quod odio corporis libero sunt dolorum harum fugit
              dolor, earum minima! Magnam, eius dicta. Nihil accusantium dolores
              voluptas repudiandae?
            </p>
            <Link to="/register" className="btn btn-hero">Login/Register</Link>
          </div>
        </div>
      </main>
    </Wrapper>
  );
};


export default Landing;