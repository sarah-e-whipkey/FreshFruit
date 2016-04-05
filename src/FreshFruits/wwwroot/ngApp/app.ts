namespace FreshFruits {

    angular.module('FreshFruits', ['ui.router', 'ngResource', 'ui.bootstrap']).config((
        $stateProvider: ng.ui.IStateProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider,
        $locationProvider: ng.ILocationProvider
    ) => {
        // Define routes
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/ngApp/views/home.html',
                controller: FreshFruits.Controllers.HomeController,
                controllerAs: 'controller'
            })
            .state('about', {
                url: '/about',
                templateUrl: '/ngApp/views/about.html',
                controller: FreshFruits.Controllers.AboutController,
                controllerAs: 'controller'
            })
            .state('fruitList', {
                url: '/fruits',
                templateUrl: '/ngApp/views/fruits.html',
                controller: FreshFruits.Controllers.FruitsController,
                controllerAs: 'controller'
            })
            .state('addFruit', {
                url: '/addFruit',
                templateUrl: '/ngApp/views/addFruit.html',
                controller: FreshFruits.Controllers.AddFruitController,
                controllerAs: 'controller'
            })
            .state('notFound', {
                url: '/notFound',
                templateUrl: '/ngApp/views/notFound.html'
            });

        // Handle request for non-existent route
        $urlRouterProvider.otherwise('/notFound');

        // Enable HTML5 navigation
        $locationProvider.html5Mode(true);
    });

    

}
