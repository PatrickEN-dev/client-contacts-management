import styled from "styled-components";

export const MainContainer = styled.main`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: center;
  padding: 6px 1px;

  @media (min-width: 768px) {
    padding: 6px 1px;
  }
`;

export const InnerContainer = styled.div`
  margin-top: 2.5rem;
  max-width: 20rem;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1.25;
  color: #1a202c;
`;

export const Form = styled.form`
  margin-top: 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.5;
  color: #1a202c;
`;

export const Input = styled.input`
  width: 100%;
  border: 0;
  border-radius: 0.25rem;
  padding: 0.375rem 0.75rem;
  font-size: 0.875rem;
  line-height: 1.5;
  box-shadow: 0 0 0 1px #d2d6dc;
  &::placeholder {
    color: #a0aec0;
  }
  &:focus {
    outline-offset: 2px;
    outline: 2px solid transparent;
    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
  }
`;

export const SubmitButton = styled.button`
  justify-content: center;
  margin-top: 1rem;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.5;
  text-transform: uppercase;
  color: #fff;
  background-color: #4f46e5;
  border-radius: 0.25rem;
  transition: background-color 0.2s ease-in-out;
  border: transparent;
  &:hover {
    background-color: #4338ca;
  }
  &:focus-visible {
    outline: 2px solid transparent;
    outline-offset: 2px;
    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
