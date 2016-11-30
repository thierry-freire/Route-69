angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.home', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('mesas', {
    url: '/page2',
    templateUrl: 'templates/mesas.html',
    controller: 'mesasCtrl'
  })

  .state('meusPedidos', {
    url: '/page3',
    templateUrl: 'templates/meusPedidos.html',
    controller: 'meusPedidosCtrl'
  })

  .state('configuraEs', {
    url: '/page6',
    templateUrl: 'templates/configuraEs.html',
    controller: 'configuraEsCtrl'
  })

  .state('menu.carrinhoDeCompras', {
    url: '/page7',
    views: {
      'side-menu21': {
        templateUrl: 'templates/carrinhoDeCompras.html',
        controller: 'carrinhoDeComprasCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('menu.login', {
    url: '/page4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
      }
    }
  })

  .state('menu.signup', {
    url: '/page5',
    views: {
      'side-menu21': {
        templateUrl: 'templates/signup.html',
        controller: 'signupCtrl'
      }
    }
  })

  .state('menu.sair', {
    url: '/page8',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sair.html',
        controller: 'sairCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/page4')

  

});