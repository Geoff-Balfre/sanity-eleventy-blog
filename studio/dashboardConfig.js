export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '5fa1420dab138f9c68270591',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-1gkpq5ku',
                  apiId: 'b4fb3e8f-a8b6-497b-b6b4-97a842cc09b2'
                },
                {
                  buildHookId: '5fa1420d421f99bf4b809073',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-i2hjxsgq',
                  apiId: '9c6a54ae-3d88-4f83-b9c4-ac02bd0b0d33'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Geoff-Balfre/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-i2hjxsgq.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
