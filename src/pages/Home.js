import React, { Component } from "react";
import { Card, Slideshow, Grid, Button } from "kk-design-system";
import styled from "styled-components";
import slideImg1 from "./../assets/images/slideshow-img1.jfif";
import slideImg2 from "./../assets/images/slideshow-img-2.jfif";
import slideImg3 from "./../assets/images/slideshow-img-3.jfif";
import headImg1 from "./../assets/images/headliner-1.jfif";
import headImg2 from "./../assets/images/headliner-2.jfif";
import headImg3 from "./../assets/images/headliner-3.jpg";
import bannerImg from "./../assets/images/banner-img-1.jfif";
import bgOcta from "./../assets/bg--octa.svg";
import double from "./../assets/images/double.png";
import sampler from "./../assets/images/sampler.png";
import trifecta from "./../assets/images/trifecta.png";
import TicketModal from "./../components/TicketModal";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: true,
    };
  }

  toggleModal() {
    this.setState({ modalVisible: !this.state.modalVisible });
  }

  render() {
    return (
      <>
        <HomeContainer id="home-page">
          <h1 className="u-sr-only">KK Festival</h1>
          <section className="page-section hero-slider-section btn--pink-wrapper">
            <h2 className="section-title u-sr-only">Festival info slideshow</h2>
            <Slideshow>
              <div className="hero-slider__slide">
                <img src={slideImg1} alt="Slide 1 Image" />
                <h3 className="hero-slider__slide__title">
                  <div className="feat">feat.</div>forest lyf
                </h3>
                <div className="hero-slider__slide__cta">
                  <Button>purchase a ticket</Button>
                </div>
              </div>
              <div className="hero-slider__slide">
                <img src={slideImg2} alt="Slide 2 Image" />
                <h3 className="hero-slider__slide__title">
                  <div className="feat">feat.</div>forest lyf
                </h3>
                <div className="hero-slider__slide__cta">
                  <Button>purchase a ticket</Button>
                </div>
              </div>
              <div className="hero-slider__slide">
                <img src={slideImg3} alt="Slide 3 Image" />
                <h3 className="hero-slider__slide__title">
                  <div className="feat">feat.</div>forest lyf
                </h3>
                <div className="hero-slider__slide__cta">
                  <Button>purchase a ticket</Button>
                </div>
              </div>
            </Slideshow>
            <div className="scroll-more">
              <div className="scroll-more__icon">➔</div>
            </div>
          </section>
          <section className="page-section featured-artist-section">
            <div className="o-container">
              <img
                className="featured-artist-section__bg"
                aria-hidden="true"
                src={bgOcta}
                alt=""
              />
              <h2 className="section-title u-sr-only">Featured artists</h2>
              <div class="featured-artist-section__inner featured-artist-section__inner--headliner">
                <h3 className="section-title">The Headliners</h3>
                <Grid colClass="three-col">
                  <Card image={headImg1} noText={true} tag="" />
                  <Card image={headImg2} noText={true} tag="" />
                  <Card image={headImg3} noText={true} tag="" />
                </Grid>
              </div>
              <div className="featured-artist-section__inner featured-artist-section__inner--lineup">
                <h3 className="section-title">The Lineup</h3>
                <Grid colClass="three-col">
                  <div className="lineup-grid__item">
                    <h4>18 July 2020</h4>
                    <ul>
                      <li>Daisy Mae and Bah Se Bahde</li>
                      <li>Phat Meatballz</li>
                      <li>DUSTOY</li>
                      <li>Stale Cupcakes</li>
                      <li>Fatoumata Diawara</li>
                      <li>Enjoy</li>
                    </ul>
                  </div>
                  <div className="lineup-grid__item">
                    <h4>19 July 2020</h4>
                    <ul>
                      <li>B000UVZO1E</li>
                      <li>Mr. Oizo</li>
                      <li>Syn Cole</li>
                      <li>SOPHIE</li>
                      <li>death’s dynamic Shroud.wmv</li>
                      <li>GFOTY</li>
                    </ul>
                  </div>
                  <div className="lineup-grid__item">
                    <h4>20 July 2020</h4>
                    <ul>
                      <li>i_o</li>
                      <li>Mid-Air Thief</li>
                      <li>KIRINJI</li>
                      <li>Shintaro Sakamoto</li>
                      <li>Lamp</li>
                      <li>CHAI</li>
                    </ul>
                  </div>
                </Grid>
              </div>
            </div>
          </section>
          <section className="page-section ticket-section">
            <div className="ticket-section__bg">
              <img src={bannerImg} alt="Banner Image" />
            </div>
            <div className="o-container">
              <div className="ticket-grid btn--dark-blue-wrapper">
                <h2 className="section-title">Select your Getaway Pkg:</h2>
                <Grid colClass="three-col">
                  <Card
                    image={sampler}
                    title="The Sampler"
                    description="Pkg includes one day general festival admission. No frills. Just jams. Check it."
                    btnText="purchase a ticket"
                    btnClick={() => {
                      this.toggleModal();
                    }}
                    tag=""
                  />
                  <Card
                    image={double}
                    title="Double Dip"
                    description="Pkg includes wknd pass to the festival, with select front row spots. Groovy."
                    btnText="purchase a ticket"
                    btnClick={() => {
                      this.toggleModal();
                    }}
                    tag=""
                  />
                  <Card
                    image={trifecta}
                    title="The Trifecta"
                    description="Pkg includes wknd pass to the festival, with full VIP access and a secret...Far out."
                    btnText="purchase a ticket"
                    btnClick={() => {
                      this.toggleModal();
                    }}
                    tag="best value"
                  />
                </Grid>
              </div>
            </div>
          </section>
        </HomeContainer>
        <TicketModal
          visible={this.state.modalVisible}
          toggleModal={() => {
            this.toggleModal();
          }}
        />
      </>
    );
  }
}

const HomeContainer = styled.div`
  .hero-slider-section {
    background-color: var(--tp-blue--dark);
    position: relative;

    .c-slider__dot {
      background-color: var(--kk-white);
    }
  }

  .hero-slider__slide {
    width: 100vw;
    height: 100vh;
    max-height: 50rem;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .hero-slider__slide__cta {
    position: absolute;
    right: 10%;
    bottom: 5%;
  }

  .hero-slider__slide__title {
    color: var(--kk-white);
    font-size: 4rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    @media only screen and (min-width: 768px) {
      font-size: 5rem;
    }

    .feat {
      font-weight: 300;
      font-size: 2rem;
      margin-left: -3rem;

      @media only screen and (min-width: 768px) {
        font-size: 4rem;
      }
    }
  }

  .featured-artist-section {
    position: relative;
    background-color: var(--tp-blue--dark);
    color: var(--kk-white);

    .lineup-grid__item {
      display: flex;
      flex-direction: row;

      h4 {
        max-width: 5rem;
        line-height: 1.25rem;
        color: var(--tp-pink);
      }

      ul {
      }

      li {
        padding: 0.5rem 0;

        &:first-child {
          padding-top: 0;
        }
      }
    }
  }

  .featured-artist-section__inner {
    &:first-of-type {
      margin-bottom: 3rem;
    }
  }

  .featured-artist-section__bg {
    position: absolute;
    left: 0;
    top: 0;
  }

  .ticket-section {
    background-color: var(--tp-blue--dark);

    .ticket-grid {
      margin-top: -8rem;
    }
  }

  .ticket-section__bg {
    width: 100vw;
    height: 30rem;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .scroll-more {
    width: 4rem;
    height: 4rem;
    background-color: var(--tp-pink);
    position: absolute;
    bottom: 1rem;
    left: 50%;
    border-radius: 2.5rem;
    z-index: 3;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    color: var(--kk-white);
  }

  .scroll-more__icon {
    transform: rotate(90deg);
    position: relative;
    animation: scroll 1s infinite ease-in-out;
    top: -2px;
  }

  @keyframes scroll {
    0% {
      top: 1px;
      opacity: 0;
    }

    30% {
      top: 3px;
      opacity: 1;
    }

    100% {
      top: 6px;
      opacity: 0;
    }
  }
`;

export default Home;
