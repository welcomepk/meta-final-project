import styled from "styled-components";
import { HTMLAttributes } from "react";

export const Container = styled.div<HTMLAttributes<HTMLDivElement>>`
  width: 66%;
  height: 100vh;
  min-height: 59rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4.3rem;
  padding-top: 4rem;
  /* background-color: rgba(251, 218, 187, .3); */

  ::before {
    content: '';
    width: 100%;
    height: 100vh;
    min-height: 59rem;
    margin-bottom: -4rem;
    position: absolute;
    background-color: rgba(251, 218, 187, .3);
    z-index: -1;

    @media (max-width: 1120px) {
      min-height: 100rem;
    };

    @media (max-width: 606px) {
      /* height: 100%; */
      height: 190rem;
      min-height: 190rem;
    };
  };

  @media (max-width: 1120px) {
    width: 90%;
    min-height: 100rem;
  };

  @media (max-width: 606px) {
    height: 100%;
  };
`;

export const Title = styled.h2<HTMLAttributes<HTMLHeadingElement>>`
  width: 100%;
  height: auto;
  text-align: center;
`;

export const Cards = styled.div<HTMLAttributes<HTMLDivElement>>`
  
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  
  @media (max-width: 1200px) {
  grid-template-columns: repeat(3, 1fr);
  };
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    };
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    
  };
`;