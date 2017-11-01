exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createRedirect } = boundActionCreators;

  const redirectBatch = [
    { f: '/02-first-grid', t: '/css-grid/02-first-grid' },
    { f: '/02-first-grid/', t: '/css-grid/02-first-grid' },
    { f: '/03-firefox-devtools', t: '/css-grid/03-firefox-devtools' },
    { f: '/03-firefox-devtools/', t: '/css-grid/03-firefox-devtools' },
    { f: '/04-fr-unit', t: '/css-grid/04-fr-unit' },
    { f: '/04-fr-unit/', t: '/css-grid/04-fr-unit' },
    { f: '/05-mixing-units', t: '/css-grid/05-mixing-units' },
    { f: '/05-mixing-units/', t: '/css-grid/05-mixing-units' },
    { f: '/06-position-items', t: '/css-grid/06-position-items' },
    { f: '/06-position-items/', t: '/css-grid/06-position-items' },
    { f: '/07-basic-layout', t: '/css-grid/07-basic-layout' },
    { f: '/07-basic-layout/', t: '/css-grid/07-basic-layout' },
    { f: '/08-template-areas', t: '/css-grid/08-template-areas' },
    { f: '/08-template-areas/', t: '/css-grid/08-template-areas' },
    { f: '/09-named-lines', t: '/css-grid/09-named-lines' },
    { f: '/09-named-lines/', t: '/css-grid/09-named-lines' },
    { f: '/10-learn-more', t: '/css-grid/10-learn-more' },
    { f: '/10-learn-more/', t: '/css-grid/10-learn-more' },
  ];

  redirectBatch.forEach(({ f, t }) => {
    createRedirect({
      fromPath: f,
      redirectInBrowser: true,
      toPath: t,
    });
    // Uncomment next line to see forEach in action during build
    console.log(`\nRedirecting:\n${f}\nTo:\n${t}\n`);
  });
};
