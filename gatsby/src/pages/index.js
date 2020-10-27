import React, { useEffect } from 'react';
//import kwesforms from 'kwesforms';
import { graphql, useStaticQuery } from 'gatsby';
// import styled from 'styled-components';



export default function HomePage({ data }) {
  // const hero = data.gcms.homePages;
  const {gcms: {heroes}} = useStaticQuery(pageQuery) 
  
  // useEffect (() => {
  //   kwesforms.init();
  // })

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
    <div className="center">
      
      {heroes.map(({...hero}) => (
        <h1 key="{hero.id}">{hero.heroHeadline}</h1>
      ))}

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

    </div>
  );
}

// export const query = graphql`
//   query {
//     gcms {
//       homePages {
//         heroText
//       }
//     }
//   }
// `;

export const pageQuery = graphql`
  query {
    gcms {
      heroes(first: 1) {
        heroHeadline
        id
      }
    }
  }
`;