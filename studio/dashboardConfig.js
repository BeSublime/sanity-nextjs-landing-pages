export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5f4b39e3281ab6a3b15f5c2c',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-v1ppxgz4',
                  apiId: 'ee8ca7a9-e310-4c5d-be08-ae9d05b351ec'
                },
                {
                  buildHookId: '5f4b39e315bbe4fe9b9c908c',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-71uuk4o6',
                  apiId: '6bee0850-08a8-4c0e-8340-caff0b15146d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/BeSublime/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-71uuk4o6.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
