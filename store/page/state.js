import resources from '~/assets/scripts/resources'

export default () => ({
  curriculum: [
    {
      title: 'Experiences',
      fields: [
        {
          subtitle: 'Internship',
          tag: 'Jun. 2019 — Nov. 2019',
          name: 'Meero',
          section: {
            subject: 'Missons',
            items: [
              'Front-end development',
              'Integration',
              'Rest API',
            ],
          },
        },
        {
          subtitle: 'Project',
          tag: 'Jan. 2019 — Jun. 2019',
          name: 'Offit',
          section: {
            subject: 'Missons',
            items: [
              'Project management',
              'Full-stack development',
            ],
          },
        },
        {
          subtitle: 'Internship',
          tag: 'Jul. 2018 — Sep. 2018',
          name: 'Wait and See agency',
          section: {
            subject: 'Missons',
            items: [
              'Integration',
              'Front-end development',
            ],
          },
        },
      ],
    },
    {
      title: 'Education',
      fields: [
        {
          subtitle: 'Web school',
          tag: '2016 — 2021',
          name: 'HÉTIC',
          section: {
            subject: 'Curriculum',
            items: [
              'Project management',
              'Product design',
              'UX/UI design',
              'Web development',
              'Digital marketing',
            ],
          },
        },
        {
          subtitle: 'Prepatory school',
          tag: '2014 — 2016',
          name: 'Lycée Saint Louis',
          section: {
            subject: 'Curriculum',
            items: [
              'Mathematics',
              'Physics',
              'Engineering',
            ],
          },
        },
      ],
    },
    {
      title: 'Mentions',
      fields: [
        {
          subtitle: 'Awwwards',
          section: {
            subject: 'Gaëtan Lefebvre\'s porfolio',
            items: [
              'Honorable Mention',
              'Mobile Excellence',
            ],
          },
        },
      ],
    },
    {
      title: 'Skills',
      fields: [
        {
          subtitle: 'Front-end',
          items: [
            'Vue.js',
            'React.js',
            'Nuxt.js',
            'Next.js',
            'THREE.js',
            'SASS',
            'Stylus',
          ],
        },
        {
          subtitle: 'Back-end',
          items: [
            'WordPress',
            'Node.js',
            'Slim Framework',
            'MySQL',
            'MongoDB',
          ],
        },
        {
          subtitle: 'Mobile',
          items: [
            'Swift',
          ],
        },
        {
          subtitle: 'Learning',
          items: [
            'Strapi',
            'TypeScript',
            'GatsbyJS',
            'Cypress',
            'GraphQL',
            'Docker',
          ],
        },
      ],
    },
    {
      title: 'Hobbies',
      fields: [
        {
          subtitle: 'Sciences',
          items: [
            'Mathematics',
            'Physics',
            'Computer science',
          ],
        },
        {
          subtitle: 'Animes',
          items: [
            'Detective Conan',
            'Attack on Titan',
          ],
        },
        {
          subtitle: 'Series',
          items: [
            'Super Sentai',
            'Kamen Rider',
          ],
        },
        {
          subtitle: 'Other',
          items: [
            'Pen spinning',
          ],
        },
      ],
    },
  ],
  projects: [
    {
      name: 'Assoïe Louvart\'s portfolio',
      slug: 'assoie-louvart',
      code: 'https://github.com/KamenSentai/Assoie_Louvart-portfolio',
      demo: 'http://assoielouvart.com/',
      description: 'This is Assoïe Louvart\'s portfolio made with Nuxt.js',
      context: [
        'Assoïe is a UX/UI designer and classmate of mine. She wanted to update her portfolio in order to present her works as she is looking for an internship in a foreign country.',
        'I didn’t not choose to refactor the previous portfolio and I preferred to build her portfolio from scratch because the code of the previous portfolio is frameworkless.',
      ],
      parallax: resources.AssoieLouvartMockups,
      date: 'January 2020 — Frebruary 2020',
      tools: [
        'Vue.js',
      ],
      team: [
        {
          name: 'Assoïe LOUVART DE PONTLEVOYE',
          role: 'Project manager & UX/UI designer',
        },
        {
          name: 'Alain CAO VAN TRUONG',
          role: 'Front-end developer',
        },
      ],
      gallery: [
        [resources.AssoieLouvartHomeYukey, resources.AssoieLouvartProjectYukey],
        [resources.AssoieLouvartHomeFeedchi, resources.AssoieLouvartProjectFeedchi],
        [resources.AssoieLouvartHomePocketNurse, resources.AssoieLouvartProjectPocketNurse],
        [resources.AssoieLouvartHomeMealthy, resources.AssoieLouvartProjectMealthy],
        [resources.AssoieLouvartHomeAcneStudios, resources.AssoieLouvartProjectAcneStudios],
        [resources.AssoieLouvartAbout],
      ],
    },
    {
      name: 'MeeroDrop',
      slug: 'meerodrop',
      code: '',
      demo: 'https://www.meerodrop.com/fr/',
      description: 'MeeroDrop is an sharing media service made with Vue.js and Symfony.',
      context: [
        'I went to a 5-month internship at [Meero](https://www.meero.com/). Meero is a french startup based in Paris and it is an on-demand photography company.',
        'Meero is mainly a BtoB company, and a new project BtoC is planned which is MeeroDrop : it is a sharing media platform oriented towards photography.',
        'We were three front-end developers and three back-end developers alongside a Head of, a product owner, a product manager and two UX/UI designers.',
      ],
      parallax: resources.MeeroDropMockups,
      date: 'June 2019 — November 2019',
      tools: [
        'Vue.js',
        'Symfony',
        'API Platform',
        'AWS',
        'Docker',
        'Jenkins',
      ],
      team: [
        {
          name: 'MeeroDrop squad',
          role: '',
        },
        {
          name: 'Alain CAO VAN TRUONG',
          role: 'Front-end developer',
        },
      ],
      gallery: [
        [resources.MeeroDropHome],
        [resources.MeeroDropUpload],
        [resources.MeeroDropGallery],
        [resources.MeeroDropGrid],
        [resources.MeeroDropDrops],
        [resources.MeeroDropProfil],
      ],
    },
    {
      name: 'Offit',
      slug: 'offit',
      code: '',
      demo: 'https://offit.com/',
      description: 'Offit is a BtoB coaching service and its website is made with WordPress.',
      context: [
        'Our third year at HÉTIC is lead by a 6-month project with a client.',
        'Victor Mertz is the founder of Offit, a BtoB coaching service, and he needs us to develop a website for his company and a webapp to manage his clients\' activities.',
        'The website presents the company, the rate and a blog. All articles are written by Victor Mertz. Unfortunately, we couldn\'t be able to provide him a webapp.',
      ],
      parallax: resources.OffitMockups,
      date: 'January 2019 — June 2019',
      tools: [
        'Vue.js',
        'WordPress',
        'ACF',
      ],
      team: [
        {
          name: 'Paul AGOSTINI',
          role: 'Project manager',
        },
        {
          name: 'Victor BLOCH',
          role: 'Lead UX/UI designer',
        },
        {
          name: 'Yoann HALM',
          role: 'UX/UI designer & SEO/SEA manager',
        },
        {
          name: 'Charles BASSIGNOT',
          role: 'Back-end developer',
        },
        {
          name: 'Alain CAO VAN TRUONG',
          role: 'Full-stack developer',
        },
      ],
      gallery: [
        [resources.OffitHome],
        [resources.OffitValues],
        [resources.OffitPrograms],
        [resources.OffitQuote],
        [resources.OffitForm],
        [resources.OffitArticle],
      ],
    },
    {
      name: 'Scaneat',
      slug: 'scaneat',
      code: 'https://github.com/KamenSentai/ScanEat',
      demo: '',
      description: 'Scaneat is a school project mobile app based on Swift and Open Food Fact API',
      context: [
        'At school, we had a 5-days project about mobile : design a mobile application, develop it and build its business model. There was one rule : use [Open Food Fact API](https://en.wiki.openfoodfacts.org/API).',
        'One member of our team has food constraints in their way of life. So, we imagined an application which helps people to easily detect which product is appropriate for a user by scanning it.',
        'By the end of the five days, we succeeded with the sign up and sign in feature, we managed how to scan a product code, we can fetch data from the API and interact with the database.',
      ],
      parallax: resources.ScaneatMockups,
      date: 'April 2019',
      tools: [
        'Swift',
        'Firebase',
      ],
      team: [
        {
          name: 'Arthur GIRAULT',
          role: 'Project manager & marketing manager',
        },
        {
          name: 'Yoël HANOUFA',
          role: 'UX/UI designer & marketing manager',
        },
        {
          name: 'Téo MIGDAL',
          role: 'UX/UI designer & marketing manager',
        },
        {
          name: 'Marie-Athénaïs DUSSORDET',
          role: 'Mobile developer',
        },
        {
          name: 'Alain CAO VAN TRUONG',
          role: 'Mobile developer',
        },
      ],
      gallery: [
        [resources.ScaneatSignIn, resources.ScaneatSignUp, resources.ScaneatSuggestions],
        [resources.ScaneatList, resources.ScaneatScan, resources.ScaneatOptions],
      ],
    },
    {
      name: 'Gaëtan Lefebvre\'s portfolio',
      slug: 'gaetan-lefebvre',
      code: 'https://github.com/KamenSentai/Gaetan-Lefebvre_portfolio',
      demo: 'https://gaetanlefebvre.fr/',
      description: 'This is Gaëtan Lefebvre\'s portfolio made with Nuxt.js',
      context: [
        'Gaëtan Lefebvre is a 4-year student at HÉTIC when I am a 3-third student. He was looking for a developer for his portfolio and I accepted to help him.',
        'I started to use Vue.js, but I quickly migrated to Nuxt.js framework for SEO reasons. It was a long project, from early January to late March, due to plenty of responsive, animations and SEO constraints.',
        'This portfolio is awarded with a [Honorable Mention](https://www.awwwards.com/sites/gaetan-lefebvre-portfolio) and a [Mobile Excellence](https://www.awwwards.com/sites/gaetan-lefebvre-portfolio/mobile-excellence-report) by Awwwards.',
      ],
      parallax: resources.GaetanLefebvreMockups,
      date: 'December 2018 — March 2019',
      tools: [
        'Vue.js',
        'Nuxt.js',
        'GSAP',
      ],
      team: [
        {
          name: 'Gaëtan LEFEBVRE',
          role: 'Project manager & UX/UI designer',
        },
        {
          name: 'Alain CAO VAN TRUONG',
          role: 'Front-end developer',
        },
      ],
      gallery: [
        [resources.GaetanLefebvreAboutGreen, resources.GaetanLefebvreAboutBlue],
        [resources.GaetanLefebvreAboutRed, resources.GaetanLefebvreAboutYellow],
        [resources.GaetanLefebvreHomeGreen, resources.GaetanLefebvreHomeBlue],
        [resources.GaetanLefebvreHomeRed, resources.GaetanLefebvreHomeYellow],
        [resources.GaetanLefebvreProjectGreen, resources.GaetanLefebvreProjectBlue],
        [resources.GaetanLefebvreProjectRed, resources.GaetanLefebvreProjectYellow],
      ],
    },
    {
      name: 'ChatMEAN',
      slug: 'chatmean',
      code: 'https://github.com/KamenSentai/ChatMEAN',
      demo: '',
      description: 'ChatMEAN is a school project based on a Stack MEAN boilerplate',
      context: [
        'In class, we built a Stack MEAN boilerplate, then we had to use it to develop a chat for a school project. The project was a real opportunity to test all the four technologies of the Stack MEAN ecosystem. The final step remaining is using Socket.io in order to make the chat live.',
        'Assoïe, Jay-min and Olivia basically designed all the sketches, Loris integrated them and I built the chat system.',
        'I tried to use socket.io so that the chat system is live, but it was unsuccessful. If I have time, I would like to refactor this project.',
      ],
      parallax: resources.ChatMEANMockups,
      date: 'Frebruary 2019',
      tools: [
        'MongoDB',
        'Angular',
        'Express.js',
        'Node.js',
      ],
      team: [
        {
          name: 'Assoïe LOUVART DE PONTLEVOYE',
          role: 'Project manager & UX/UI designer',
        },
        {
          name: 'Jay-min PATEL',
          role: 'UX/UI designer',
        },
        {
          name: 'Olivia MONKAM',
          role: 'UX/UI designer',
        },
        {
          name: 'Loris MARINO',
          role: 'Front-end developer',
        },
        {
          name: 'Alain CAO VAN TRUONG',
          role: 'Back-end developer',
        },
      ],
      gallery: [
        [resources.ChatMEANHome],
        [resources.ChatMEANSignIn],
        [resources.ChatMEANSignUp],
        [resources.ChatMEANRoom],
      ],
    },
  ],
  resume: '/CV-CAO_VAN_TRUONG_Alain.pdf',
  social: [
    {
      name: 'GitHub',
      link: 'https://github.com/KamenSentai',
    },
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/alain-cao-van-truong/',
    },
    {
      name: 'Twitter',
      link: 'https://twitter.com/AlainCVT',
    },
    {
      name: 'CodePen',
      link: 'https://codepen.io/KamenSentai',
    },
    {
      name: 'Email',
      link: 'mailto:contact@alaincaovantruong.com',
    },
  ],
})
