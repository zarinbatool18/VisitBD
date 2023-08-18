import React from "react";
import styled from "styled-components";
import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";
import service4 from "../assets/service4.png";

export default function About() {
  const data = [
    {
      icon: service1,
      title: "About us",
      subTitle:
        "We help you to make the best tour plans.",
    },
    {
      icon: service2,
      title: "Get Best Tour Packages",
      subTitle:
        "Get best tour packages at reasonable cost",
    },
    {
      icon: service3,
      title: "Connect with Other Tour Groups",
      subTitle:
        "Connect with other tourists and make tour groups.",
    },
    {
      icon: service4,
      title: "Find The Best Near You",
      subTitle:
        "Find the best hotels and places to visit near you.",
    },
  ];
  return (
    <Section id="about">
      {data.map((about, index) => {
        return (
          <div className="about">
            <div className="icon">
              <img src={about.icon} alt="" />
            </div>
            <h3>{about.title}</h3>
            <p>{about.subTitle}</p>
          </div>
        );
      })}
    </Section>
  );
}

const Section = styled.section`
  padding: 5rem 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  .about {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
    background-color: aliceblue;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    transition: 0.3s ease-in-out;
    &:hover {
      transform: translateX(0.4rem) translateY(-1rem);
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
    .icon {
      img {
        height: 2.4rem;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 720px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
