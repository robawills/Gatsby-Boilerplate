import React from 'react';


export default function HomePage({ data }) {
  const hero = data.home;
  return (
    <div className="center">
      <h1>{hero.Test}</h1>
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