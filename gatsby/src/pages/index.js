import React, { useEffect } from 'react';
import kwesforms from 'kwesforms';

export default function HomePage({ data }) {
  const hero = data.home;
  useEffect (() => {
    kwesforms.init();
  })

  return (
    <div className="center">
      <h1>{hero.Test}</h1>

      <form class="kwes-form" action="https://kwes.io/api/foreign/forms/bMCsqtQkSmQcwqNiKN8S">
          <label for="name">Your Name</label>
          <input type="text" name="name" rules="required|max:255"/>

          <button type="submit">Submit</button>
      </form>

    </div>
  );
}

export const query = graphql`
  
  query {
    home: strapiHomePage {
      Test
    }
  }
`;