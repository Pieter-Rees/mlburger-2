'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'static-app',
    environment,
    rootURL: '/',
    locationType: 'auto',
    moment: {
      includeLocales: ['nl']
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    contentful: {
      space: 'upmwne6oi8po',
      accessToken: '43eb780389f440bee9e0e677b8d4916820e9c378771c6eb95e73a3d2e9ce3b7c',
      previewAccessToken: 'f6e6679f4dcea0eaf5716d9dedaa342ba5ca08b17e0b78b572b8c314d223ae42',
      usePreviewApi: true
    },

    googleFonts: [
      'Italianno:400'
    ],

    // Set or update content security policies
    contentSecurityPolicy: {
      'font-src': "'self' fonts.gstatic.com",
      'style-src': "'self' fonts.googleapis.com"
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
    ENV.baseURL = '/new/';
  }

  return ENV;
};
