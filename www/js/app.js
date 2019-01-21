// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'LoginCtrl'
  })
   .state('app.home', {
      url: '/home',
      views: {
        'menuContent': {
          templateUrl: 'templates/accueil.html',
          controller: 'retardCtrl'
        }
      }
    })

   .state('app.horaire', {
      url: '/horaire',
       abstract: true,
      views: {
        'menuContent': {
          templateUrl: 'templates/horaire.html'
        }
      }
    })

  .state('app.parameter', {
    url: '/parameter',
    views: {
      'menuContent': {
        templateUrl: 'templates/parameter.html'
      }
    }
  })

  

  .state('app.login', {
    url: '/login',
    views: {
      'menuContent': {
        templateUrl: 'templates/login.html'
      }
    }
  })

  .state('app.inscription', {
      url: '/inscription',
      views: {
        'menuContent': {
          templateUrl: 'templates/inscription.html'
        }
      }
    })

  .state('app.profil', {
    url: '/profil',
    views: {
      'menuContent': {
        templateUrl: 'templates/profil.html'
      }
    }
  })

  .state('app.badges', {
    url: '/profil/badges',
    views: {
      'menuContent': {
        templateUrl: 'templates/badges.html'
      }
    }
  })

  .state('app.avatar', {
    url: '/profil/avatar',
    views: {
      'menuContent': {
        templateUrl: 'templates/avatar.html'
      }
    }
  })

  .state('app.single', {
    url: '/home/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  })

  .state('app.favoris', {
    url: '/favoris',
    views: {
      'menuContent': {
        templateUrl: 'templates/favoris.html'
      }
    }
  })

  .state('app.choix_ligne', {
    url: '/choix_ligne',
    views: {
      'menuContent': {
        templateUrl: 'templates/choix_ligne.html'
      }
    }
  })

 .state('app.lignex', {
    url: '/lignex',
    views: {
      'menuContent': {
        templateUrl: 'templates/lignex.html'
      }
    }
  })

  .state('app.search', {
      url: '/search',
      views: {
        'menuContent': {
          templateUrl: 'templates/search.html'
        }
      }
    })
  .state('app.liste_trajets', {
    url: '/trajets',
    views: {
      'menuContent': {
        templateUrl: 'templates/liste_trajets.html'
      }
    }
  })
  .state('app.trajet', {
      url: '/trajet',
      views: {
        'menuContent': {
          templateUrl: 'templates/trajet.html'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
