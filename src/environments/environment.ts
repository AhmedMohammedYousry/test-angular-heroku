// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api_URL: 'https://lit-atoll-09640.herokuapp.com/api',

  pusher: {
    key: '473d6c2ef580e2c7c5d8',
    // key: 'b8dd19d436b6a0402060',
  },

  storage_URL: 'https://lit-atoll-09640.herokuapp.com/storage'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
