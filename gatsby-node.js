exports.createPages = async ({ graphql, actions: { createPage } }) => {
    const {
        data: {
            gcms: { projectList },
        },
    } = await graphql(`
        {
            gcms {
                projectList {
                    id 
                    slug
                }
            }
        }
    `);

    projectList.forEach(({ id, slug }) =>
      createPage({
          path: `/project/${slug}`,
          component: require.resolve(`./src/templates/Project.js`),
          context: {
              id,
          }
      })  
    );
};


