import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import aboutImg from "../assets/hero-bcg.jpeg";

const AboutPage = () => {
  return (
    <main>
      <PageHero title="about"></PageHero>
      <Wrapper className="page section section-center page">
        <img src={aboutImg} alt="about Img" />
        <article>
          <div className="title">
            <h2>our story</h2>
            <div className="underline"></div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            perspiciatis voluptates iste! Laborum optio provident temporibus
            saepe vitae obcaecati? Vel, atque voluptatem? Quis dolor fugiat
            molestiae quod inventore modi accusamus. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Accusantium, debitis deleniti fuga
            reiciendis eligendi excepturi ex voluptates fugit nulla culpa
            facilis facere distinctio commodi dicta nostrum, obcaecati vero
            error quia.
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 20em;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
