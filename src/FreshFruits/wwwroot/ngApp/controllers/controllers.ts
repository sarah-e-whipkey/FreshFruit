namespace FreshFruits.Controllers {

    export class HomeController {
        public message = 'Hello from the home page!';
    }



    export class AboutController {
        public message = 'Hello from the about page!';
    }

    export class FruitsController {

        public fruits;

        constructor(private $http: ng.IHttpService) {
            $http.get('/api/fruits')
                .then((response) => {
                    this.fruits = response.data;
                })
                .catch((response) => {
                    console.log(response);
                });
        }
    }

    export class AddFruitController {

        public fruits;
        public name;
        public color;
        public isFresh;
        public errors;

        constructor(private $http: ng.IHttpService, private $state: ng.ui.IStateService) {
        }

       public addFruit(): void {
           this.$http.post('/api/fruits', {
               name: this.name,
               color: this.color,
               isFresh: this.isFresh
           })
               .then((response) => { this.$state.go('fruitList') })
               .catch((response) => { this.errors = response.data });
        }
    } 
}
