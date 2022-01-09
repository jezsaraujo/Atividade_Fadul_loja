const PRODUCTS = [
    {
        id: 100,
        name: 'Brinco pirulito coração',
        price: 19.99,
        image: require('../images/brinco1.jpg'),
        description: 'Brinco de pirulito em formato coração'
    },
    {
        id: 101,
        name: 'Brinco de café bubble',
        price: 15.99,
        image: require('../images/brincocopin.jpg'),
        description: 'Brinco em formato de café Bubble.'
    },
    {
        id: 102,
        name: 'Brinco de orgãos',
        price: 15.99,
        image: require('../images/brincoestranho.jpg'),
        description: 'Brinco em formato de partes do corpo humano.'
    },
    {
        id:103,
        name: 'Brinco de lâmpada',
        price: 15.99,
        image: require('../images/brincolampada.jpg'),
        description: 'Brinco em formato de lâmpada'
    },
    {
        id:104,
        name: 'Brinco de pirulito em formato bolinha',
        price: 15.99,
        image: require('../images/brincopop2.jpg'),
        description: 'Brinco em formato pirulito de bolinha'
    },
    {
        id:105,
        name: 'Brinco de ursinho',
        price: 15.99,
        image: require('../images/brincoursinho.jpg'),
        description: 'Brinco em formato de ursinho.'
    }
    
];

export function getProducts() {
    return PRODUCTS;
}

export function getProduct(id) {
    return PRODUCTS.find((product) => (product.id == id));
}

