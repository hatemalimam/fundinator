/*     
 * Author     : hatemalimam
 */
import angular from 'angular';
import product from './components/product';

import '../styles/sass/main.scss';

let app = () => {
    return {
        template: require('./app.html'),
        controller: 'AppCtrl',
        controllerAs: 'app'
    };
};

class AppCtrl {    
    constructor() {
        //generating a random product to use in product component
        this.currentRandomProduct = this.getRandomProduct();
    }

    //it's boring to see the same imaginary product over and over :)
    getRandomProduct() {
        var products = [{title: "Super Nintendo", image: "http://hatemalimam.com/uploads/fundinator/product1.png"}, {title: "ATARI 2600", image: "http://hatemalimam.com/uploads/fundinator/product2.png"}, {title: "SEGA Genesis", image: "http://hatemalimam.com/uploads/fundinator/product3.png"}];

        return products[Math.floor(Math.random() * products.length)];
    }
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [product.name])
        .directive('app', app)
        .controller('AppCtrl', AppCtrl);

export default MODULE_NAME;