export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f5daa3aa9ea4d439be472e1',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-y9houfuj',
                  apiId: 'c3d0693f-22a9-4617-a89a-a06f62a1c0db'
                },
                {
                  buildHookId: '5f5daa3a5583448b07e9cee2',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-gaa6xobd',
                  apiId: '0bb8ee5c-5106-47c8-854e-8185376032d3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Dawood39/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-gaa6xobd.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
