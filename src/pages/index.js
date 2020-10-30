import React, { useEffect } from "react";
import { graphql, useStaticQuery } from 'gatsby';
import { Link } from "gatsby";
import styled from 'styled-components';

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"


const Form = styled.div`
  .form__button {
			margin-top: 2rem;
  }
  .form__sent {
    padding: 2rem 0;
    margin-top: 3rem;
    max-width: 400px;
    width: 100%;
    opacity: 0;
    transition: all 0.3s;
    h3 {
      font-size: 2.25rem;
      color: red;
    }
    p {
      font-size: 1.75rem;
      color: white;
      margin: 0;
    }
    
  }
  .sent {
    opacity: 1;
  }
  input,
	textarea {
		font-family: inherit;
		font-size: inherit;
		min-width: 100%;
		max-width: 100%;
		width: 100%;
		padding: 12px;
		box-sizing: border-box;
		border: 1px solid black;
		transition: all 150ms ease;
		background: white;
		display: block;
		margin-top: 2rem;

		@include mq($from: tablet) {
			max-width: 400px;
			width: 100%;
		}
	}

	input:focus,
	textarea:focus {
		outline: none;
		box-shadow: 0 0 0 4px rgb(227, 227, 245);
		border-color: red;
	}

	input:disabled,
	textarea:disabled {
		color: #ccc;
	}

	button:disabled {
		background-color: red;
	}

	button:focus:not(:disabled) {
		box-shadow: 0 0 0 2px red;
	}

	button:hover:not(:disabled) {
		background-color: red;
	}
`;


export default function IndexPage() {

  const {gcms: {homePages, projectList}} = useStaticQuery(pageQuery) 

  useEffect(() => {
    const formElement = document.querySelector('#contact-form');
    const sentMessage = document.querySelector('.form__sent')

    formElement.addEventListener('submit', (event) => {
      event.preventDefault();
      const data = new URLSearchParams(new FormData(formElement));
      fetch('https://getform.io/f/dd73df86-1c8d-44dd-9fbe-5b91a91fbc36', {
        method: 'post',
        body: data
      });
      sentMessage.classList.add("sent");
      document.getElementById("contact-form").reset();
    });
  });
  
  return (
    <Layout>
      <SEO title="Home" />

      {homePages.map(({...homePage}) =>
        <h1 key="{homePage.id}">{homePage.heroText}</h1>
      )}
      
      {projectList.map(({...project}) =>
        <Link to={`/project/${project.slug}`} key="{project.id}">
          <h1>{project.name}</h1>
        </Link>
      )}

      <Form>
        <form id="contact-form" action="https://getform.io/f/9cc66643-f264-4629-8b90-d022b29ab8d6" method="POST">
          <input type="text" name="name"/>
          <input type="email" name="email"/>
          <input type="text" name="message"/>
          <button className="form__button" type="submit">Send</button>
        </form>
        <div 
          className="form__sent"
          >
          <h3>Thank you!</h3>
          <p>Your message has been successfully sent</p>
        </div>
      </Form>

      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>

      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </Layout>
  )
  
}

export const pageQuery = graphql`
  query  {
    gcms {
      homePages(first: 1) {
        heroText
        id
      }
      projectList {
        id
        name
        discription
        slug
      }
    }
  }
`;


