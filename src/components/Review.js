import React from "react";
import styled from "styled-components";
import avatarImage from "../assets/avatarImage.jpeg";
export default function Review() {
  return (
    <Section id="review">
      <div className="title">
        <h2>Users' Review</h2>
      </div>
      <div className="reviews">
        <div className="review">
          <p>
            Helpful app. But need to be more user friendly. 
          </p>
          <div className="info">
            <img src={avatarImage} alt="" />
            <div className="details">
              <h4>Prangon Chakraborty</h4>
            </div>
          </div>
        </div>
        <div className="review">
          <p>
            Got to know about this app from a friend. It's really helpful.
          </p>
          <div className="info">
            <img src={avatarImage} alt="" />
            <div className="details">
              <h4>Fazle Alahi Mukim</h4>
            </div>
          </div>
        </div>
        <div className="review">
          <p>
            Pretty good app. But need to be more feature rich.
          </p>
          <div className="info">
            <img src={avatarImage} alt="" />
            <div className="details">
              <h4>Zarin Tasnim</h4>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin: 5rem 0;
  .title {
    text-align: center;
    margin-bottom: 2rem;
  }
  .reviews {
    display: flex;
    justify-content: center;
    margin: 0 2rem;
    gap: 2rem;
    .review {
      background-color: aliceblue;
      padding: 2rem;
      border-radius: 0.5rem;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      .info {
        display: flex;
        justify-content: center;
        gap: 1rem;
        align-items: center;
        margin-top: 1rem;
        img {
          border-radius: 3rem;
          height: 3rem;
        }
        .details {
          span {
            font-size: 0.9rem;
          }
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .reviews {
      flex-direction: column;
      margin: 0;
      .review {
        justify-content: center;
        .info {
          flex-direction: column;
          justify-content: center;
        }
      }
    }
  }
`;
