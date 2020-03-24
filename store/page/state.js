import resources from '~/assets/scripts/resources'

export default () => ({
  about: {
    button: 'Resume',
    description: [
      'My name is Alain CAO VAN TRUONG. I currently study at [HÉTIC](https://www.hetic.net/), a web school based in Montreuil.',
      'I am looking for a 6-month internship near Paris as full-stack or back-end web developer from june 2020 to december 2020. Feel free to get in touch if you are interested !',
    ],
    main: [
      {
        title: 'Experiences',
        fields: [
          {
            subtitle: 'Intership',
            tag: 'Jun. 2019 — Nov. 2019',
            extra: {
              name: 'Meero',
              element: 'Missons',
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
            extra: {
              name: 'Offit',
              element: 'Missons',
              items: [
                'Project management',
                'Full-stack development',
              ],
            },
          },
          {
            subtitle: 'Intership',
            tag: 'Jul. 2018 — Sep. 2018',
            extra: {
              name: 'Wait and See agency',
              element: 'Missons',
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
            extra: {
              name: 'HÉTIC',
              element: 'Curriculum',
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
            extra: {
              name: 'Lycée Saint Louis',
              element: 'Curriculum',
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
        title: 'Skills',
        fields: [
          {
            subtitle: 'Front-end',
            list: [
              'Vue.js',
              'React.js',
              'Nuxt.js',
              'THREE.js',
              'SASS',
              'Stylus',
            ],
          },
          {
            subtitle: 'Back-end',
            list: [
              'WordPress',
              'Node.js',
              'Slim Framework',
            ],
          },
          {
            subtitle: 'Mobile',
            list: [
              'Swift',
            ],
          },
          {
            subtitle: 'Learning',
            list: [
              'Strapi',
              'Laravel',
              'Symfony',
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
            list: [
              'Mathematics',
              'Physics',
              'Computer science',
            ],
          },
          {
            subtitle: 'Animes',
            list: [
              'Detective Conan',
              'Attack on Tian',
            ],
          },
          {
            subtitle: 'Series',
            list: [
              'Super Sentai',
              'Kamen Rider',
              'Criminal Minds',
              'Breaking Bad',
            ],
          },
          {
            subtitle: 'Movies',
            list: [
              'Ip Man',
              'Enter the Dragon',
              'Fist of Legend',
              'Drunken Master',
              'Once Upon a Time in China',
            ],
          },
          {
            subtitle: 'Other',
            list: [
              'Pen spinning',
            ],
          },
        ],
      },
    ],
    resume: '/blank.pdf',
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
        name: 'Email',
        link: 'mailto:cvt.alain@gmail.com',
      },
    ],
    tag: 'I am a',
    title: 'Junior full-stack developer',
  },
  projects: [
    {
      name: 'Assoïe Louvart\'s portfolio',
      slug: 'assoie-louvart',
      code: 'https://github.com/KamenSentai/Assoie_Louvart-portfolio',
      demo: 'http://assoielouvart.com/',
      description: [
        'Assoïe is a UX/UI designer and classmate of mine. She wanted to update her portfolio in order to present her works as she is looking for an internship in a foreign country.',
        'I didn’t not chose to refactor the previous portfolio and I prefered to build her portfolio from scratch because the code of the previous portfolio is frameworkless.',
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
      description: [
        'I went to a 5-month internship at Meero. [Meero](https://www.meero.com/) is a french startup based in Paris and it is an on-demand photography company.',
        'Meero is mainly a BtoB company, and a new project BtoC is planned which is MeeroDrop : it is a sharing media platform oriented towards photography.',
        'We were 3 front-end developer and 3 back-end developers alonside a Head of, a product owner, a product manager and two UX/UI designers.',
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
      description: [
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
      description: [
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
      description: [
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
      description: [
        'In class, we built a Stack MEAN boilerplate, then we had to use it to develop a chat for a school project. The project was a real opportunity to test all the four technologies of the Stack MEAN ecosystem. The final step remaining is using Socket.io in order to make the chat live.',
        'Assoïe, Jay-min and Olivia basically designed all the sketches, Loris integrated them and I built the chat system.',
        'I tried to use socket.io so that the chat system is live, but it was unsuccessful. If I have time, I itendend to refactor this project.',
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
})
