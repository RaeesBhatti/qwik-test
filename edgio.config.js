// This file was automatically added by edgio init.
// You should commit this file to source control.
// Learn more about this file at https://docs.edg.io/guides/edgio_config
module.exports = {
  // The name of the site in Edgio to which this app should be deployed.
  name: "my-qwik-basic-starter",

  // The name of the team in Edgio to which this app should be deployed.
  // team: 'my-team-name',

  // Overrides the default path to the routes file. The path should be relative to the root of your app.
  // routes: 'routes.js',

  origins: [
    {
      name: 'wordpress',
      override_host_header: 'wordpress.com',
      hosts: [{location: 'lb.wordpress.com'}],

      // Uncomment the following to configure a shield
      // shields: { us_east: 'DCD' },
    },
  ],

  // Options for hosting serverless functions on Edgio
  // serverless: {
  //   // Set to true to include all packages listed in the dependencies property of package.json when deploying to Edgio.
  //   // This option generally isn't needed as Edgio automatically includes all modules imported by your code in the bundle that
  //   // is uploaded during deployment
  //   includeNodeModules: true,
  //
  //   // Include additional paths that are dynamically loaded by your app at runtime here when building the serverless bundle.
  //   include: ['views/**/*'],
  // },

  // The maximum number of URLs that will be concurrently prerendered during deployment when static prerendering is enabled.
  // Defaults to 200, which is the maximum allowed value.
  // prerenderConcurrency: 200,

  // A list of glob patterns identifying which source files should be uploaded when running edgio deploy --includeSources.
  // This option is primarily used to share source code with Edgio support personnel for the purpose of debugging. If omitted,
  // edgio deploy --includeSources will result in all files which are not gitignored being uploaded to Edgio.
  //
  // sources : [
  //   '**/*', // include all files
  //   '!(**/secrets/**/*)', // except everything in the secrets directory
  // ],
};
