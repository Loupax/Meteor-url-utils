Package.describe({
  name: 'loupax:url-utils',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'A library that contains useful URL related functions',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('url-utils.js');
  api.export('URLUtils');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('loupax:url-utils');
  api.addFiles('url-utils-tests.js');
});
