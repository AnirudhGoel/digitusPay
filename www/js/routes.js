angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController.profile', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/profile.html',
        controller: 'profileCtrl'
      }
    }
  })

  .state('home2', {
    url: '/page3',
    templateUrl: 'templates/home2.html',
    controller: 'home2Ctrl'
  })

  .state('tabsController.home', {
    url: '/home',
    views: {
      'tab2': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('tabsController.preferences', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/preferences.html',
        controller: 'preferencesCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.transactionHistory', {
    url: '/page5',
    views: {
      'tab2': {
        templateUrl: 'templates/transactionHistory.html',
        controller: 'transactionHistoryCtrl'
      }
    }
  })

  .state('tabsController.accountBalance', {
    url: '/accountBalance',
    views: {
      'tab2': {
        templateUrl: 'templates/accountBalance.html',
        controller: 'accountBalanceCtrl'
      }
    }
  })

  .state('tabsController.changePrimaryAccount', {
    url: '/changePrimaryAccount',
    views: {
      'tab2': {
        templateUrl: 'templates/changePrimaryAccount.html',
        controller: 'changePrimaryAccountCtrl'
      }
    }
  })

  .state('tabsController.accountChangeSuccessful', {
    url: '/accountChangeSuccessful',
    views: {
      'tab2': {
        templateUrl: 'templates/accountChangeSuccessful.html',
        controller: 'accountChangeSuccessfulCtrl'
      }
    }
  })

  .state('tabsController.payCodeChangeSuccessful', {
    url: '/payCodeChangeSuccessful',
    views: {
      'tab3': {
        templateUrl: 'templates/payCodeChangeSuccessful.html',
        controller: 'payCodeChangeSuccessfulCtrl'
      }
    }
  })

  .state('tabsController.changePayCode', {
    url: '/changePayCode',
    views: {
      'tab3': {
        templateUrl: 'templates/changePayCode.html',
        controller: 'changePayCodeCtrl'
      }
    }
  })

  .state('tabsController.newPayCode', {
    url: '/newPayCode',
    views: {
      'tab3': {
        templateUrl: 'templates/newPayCode.html',
        controller: 'newPayCodeCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/home')


});