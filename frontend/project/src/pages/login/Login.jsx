import React from 'react';
import styled from 'styled-components';
import GoogleIcon from '../../assets/chrome.png';

const LoginWrapper = styled.section`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   padding-top: 12rem;

   @media screen and (max-width: 767px) {
      padding-top: 26%;
   }
`;

const LoginTitle = styled.h1`
   color: #323232;
   font-family: Caveat Brush;
   font-size: 3rem;
   font-style: normal;
   font-weight: 400;
   line-height: normal;
`;

const Button = styled.button`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 18.125rem;
   padding: 1.1875rem 1rem;
   color: #595550;
   font-family: Nunito;
   font-size: 1rem;
   font-style: normal;
   font-weight: 700;
   letter-spacing: 0.04rem;
   border: 1px solid #f2e5d5;
   border-radius: 0.75rem;
   background: #fffdfa;
   cursor: pointer;

   &::before {
      display: inline-block;
      width: 1.625rem;
      height: 1.625rem;
      flex-shrink: 0;
      content: '';
      background: url(${GoogleIcon});
      background-size: cover;
      background-repeat: no-repeat;
      margin-right: 0.4rem;
   }

   &:hover {
      background: #fdffe3;
   }
`;

const Login = () => {
   return (
      <LoginWrapper>
         <img src="crayon.png" alt="crayon" />
         <LoginTitle>Login</LoginTitle>
         <Button>Sign up with Google</Button>
      </LoginWrapper>
   );
};

export default Login;
