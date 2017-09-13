const db = require("./index.js");
const {
  User,
  Product,
  Review,
  Category,
  productType,
  Order,
  Invoice
} = require("../db/models");

const users = [{
    email: "luke@riceisrice.com",
    password: "luke777"
  },
  {
    email: "denis@riceisrice.com",
    password: "denis777"
  },
  {
    email: "anuj@riceisrice.com",
    password: "anuj777"
  },
  {
    email: "jordan@riceisrice.com",
    password: "jordan777"
  }
];

const products = [{
    id: 1,
    title: "iPhone X",
    description: "Apple's new iPhone",
    image: "http://i1.mirror.co.uk/incoming/article11129208.ece/ALTERNATES/s615/iPhone-X-box-leaked.jpg",
    price: 1000.0,
    inventory: 5
  },
  {
    id: 2,
    title: "MacBook Pro with Touch Bar",
    description: "Apple's high-end laptop",
    image: "https://cnet2.cbsistatic.com/img/wd-2myeZ62IKbNCATa11Cn1Si2A=/770x433/2017/06/06/dd40dd8d-e24b-4859-82e8-5848e5922109/apple-macbook-pro-touch-bar-15-inch-2017-4194.jpg",
    price: 2400.0,
    inventory: 1
  },
  {
    id: 3,
    title: "Jordan's Grandfather Rice (10lb)",
    description: "organic, hand-picked rice from Korea",
    image: "http://www.nutribrownrice.com/images/articles/white-brown-red02.jpg",
    price: 88.0,
    inventory: 5
  },
  {
    id: 4,
    title: "Luke's Girlfriend Rice (10lb)",
    description: "feminine, aromatic rice from China",
    image: "http://www.nutribrownrice.com/images/articles/white-brown-red03.jpg",
    price: 77.0,
    inventory: 1
  }
];

const reviews = [{
    content: "Way too expensive for a cellphone",
    productId: 1
  },
  {
    content: "It's cool that they removed the home button",
    productId: 1
  },
  {
    content: "Man, I like this gig, but a touch bar?",
    productId: 2
  },
  {
    content: "I like the keyboard",
    productId: 2
  },
  {
    content: "The screen is awesome!",
    productId: 2
  },
  {
    content: "Taste like grandpa",
    productId: 3
  },
  {
    content: "I can smell my Korean grandfather",
    productId: 3
  },
  {
    content: "I don't need a girlfriend any more",
    productId: 4
  }
];

const categories = [{
    id: 1,
    type: "United States of America"
  },
  {
    id: 2,
    type: "Republic of Korea"
  },
  {
    id: 3,
    type: "Republic of China"
  },
  {
    id: 4,
    type: "premium"
  },
  {
    id: 5,
    type: "organic"
  }
];

const productTypes = [{
    productId: 1,
    categoryId: 1
  },
  {
    productId: 2,
    categoryId: 1
  },
  {
    productId: 3,
    categoryId: 2
  },
  {
    productId: 3,
    categoryId: 4
  },
  {
    productId: 3,
    categoryId: 5
  },
  {
    productId: 4,
    categoryId: 3
  }
];

const invoices = [{
  status: "Created",
  address: "99 John Street Unit XXX, New York, NY, 10038",
  userId: 1
}];

const orders = [{
    quantity: 3,
    orderPrice: 88.0,
    userId: 1,
    productId: 3,
    invoiceId: 1
  },
  {
    quantity: 2,
    orderPrice: 77.0,
    userId: 1,
    productId: 4,
    invoiceId: 1
  },
  {
    quantity: 1,
    orderPrice: 1000.0,
    userId: 1,
    productId: 1,
    invoiceId: 1
  }
];

const seed = () =>
  Promise.all(users.map(user => User.create(user)))
  .then(() => Promise.all(products.map(product => Product.create(product))))
  .then(() => Promise.all(reviews.map(review => Review.create(review))))
  .then(() =>
    Promise.all(categories.map(category => Category.create(category)))
  )
  .then(() => Promise.all(productTypes.map(type => productType.create(type))))
  .then(() => Promise.all(invoices.map(invoice => Invoice.create(invoice))))
  .then(() => Promise.all(orders.map(order => Order.create(order))))
  .then(() => console.log("Seeding complete!"));

const main = () => {
  console.log("Syncing db...");
  db
    .sync({
      force: true
    })
    .then(() => {
      console.log("Seeding database...");
      return seed();
    })
    .catch(err => {
      console.log("Error while seeding");
      console.log(err.stack);
    })
    .then(() => {
      db.close();
      return null;
    });
};

main();
