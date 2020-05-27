import React, { Component } from "react";
import { Card, Slideshow, Grid } from "kk-design-system";
import styled from "styled-components";

class Home extends Component {
  state = {};
  render() {
    return (
      <HomeContainer id="home-page">
        <h1 className="u-sr-only">KK Festival</h1>
        <section className="page-section hero-slider-section">
          <h2 className="section-title u-sr-only">Festival info slideshow</h2>
          <Slideshow>
            <div className="hero-slider__slide bg--blue">
              <div className="o-container hero-slider__slide-inner"></div>
            </div>
            <div className="hero-slider__slide bg--orange">
              <div className="o-container hero-slider__slide-inner"></div>
            </div>
          </Slideshow>
        </section>
        <section className="page-section featured-artist-section">
          <div className="o-container">
            <h2 className="section-title">Featured artists/dates</h2>
            <ul className="">
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                vulputate ante vel turpis rutrum mollis.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                vulputate ante vel turpis rutrum mollis.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                vulputate ante vel turpis rutrum mollis.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                vulputate ante vel turpis rutrum mollis.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                vulputate ante vel turpis rutrum mollis.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                vulputate ante vel turpis rutrum mollis.
              </li>
            </ul>
          </div>
        </section>
        <section className="page-section ticket-section">
          <h2 className="section-title u-sr-only">Ticket information</h2>
          <div className="ticket-section__bg bg--green"></div>
          <div className="o-container">
            <div className="ticket-grid">
              <Grid colClass="three-col">
                <Card btnText="purchase" tag="best value" />
                <Card btnText="purchase" tag="best value" />
                <Card btnText="purchase" tag="best value" />
              </Grid>
            </div>
          </div>
        </section>
      </HomeContainer>
    );
  }
}

const HomeContainer = styled.div`
  .hero-slider__slide {
    width: 100vw;
    height: 90vh;
    max-height: 50rem;
  }

  .featured-artist-section {
    li {
      padding: 0.5rem 0;
    }
  }

  .ticket-section__bg {
    width: 100vw;
    height: 30rem;
  }

  .ticket-grid {
    margin-top: -8rem;
  }
`;

export default Home;
