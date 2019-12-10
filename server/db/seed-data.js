const db = require('./dbconnection/index.js');
const Product = require('./dbconnection/Product.js');

const images = [
  'https://hrfecproductimages.s3-us-west-1.amazonaws.com/shopping+(1).webp',
  'https://hrfecproductimages.s3-us-west-1.amazonaws.com/shopping+(2).webp',
  'https://hrfecproductimages.s3-us-west-1.amazonaws.com/shopping+(3).webp',
  'https://hrfecproductimages.s3-us-west-1.amazonaws.com/shopping+(4).webp',
  'https://hrfecproductimages.s3-us-west-1.amazonaws.com/shopping+(5).webp',
  'https://hrfecproductimages.s3-us-west-1.amazonaws.com/shopping+(6).webp',
  'https://hrfecproductimages.s3-us-west-1.amazonaws.com/shopping+(7).webp',
  'https://hrfecproductimages.s3-us-west-1.amazonaws.com/shopping+(8).webp',
  'https://hrfecproductimages.s3-us-west-1.amazonaws.com/shopping+(9).webp',
  'https://hrfecproductimages.s3-us-west-1.amazonaws.com/shopping+(10).webp',
  'https://hrfecproductimages.s3-us-west-1.amazonaws.com/shopping+(11).webp',
  'https://hrfecproductimages.s3-us-west-1.amazonaws.com/shopping+(12).webp',
  'https://hrfecproductimages.s3-us-west-1.amazonaws.com/shopping+(13).webp',
  'https://hrfecproductimages.s3-us-west-1.amazonaws.com/shopping+(14).webp',
  'https://hrfecproductimages.s3-us-west-1.amazonaws.com/shopping+(15).webp',
  'https://hrfecproductimages.s3-us-west-1.amazonaws.com/shopping+(16).webp',
  'https://hrfecproductimages.s3-us-west-1.amazonaws.com/shopping+(17).webp',
  'https://hrfecproductimages.s3-us-west-1.amazonaws.com/shopping+(18).webp',
  'https://hrfecproductimages.s3-us-west-1.amazonaws.com/shopping+(19).webp',
  'https://hrfecproductimages.s3-us-west-1.amazonaws.com/shopping+(20).webp',
  'https://hrfecproductimages.s3-us-west-1.amazonaws.com/shopping+(21).webp',
  'https://hrfecproductimages.s3-us-west-1.amazonaws.com/shopping+(22).webp',
  'https://hrfecproductimages.s3-us-west-1.amazonaws.com/shopping+(23).webp',
  'https://hrfecproductimages.s3-us-west-1.amazonaws.com/shopping+(24).webp',
  'https://hrfecproductimages.s3-us-west-1.amazonaws.com/shopping+(25).webp',
  'https://hrfecproductimages.s3-us-west-1.amazonaws.com/shopping+(26).webp',
  'https://hrfecproductimages.s3-us-west-1.amazonaws.com/shopping+(27).webp',
  'https://hrfecproductimages.s3-us-west-1.amazonaws.com/shopping+(28).webp',
  'https://hrfecproductimages.s3-us-west-1.amazonaws.com/shopping+(29).webp',
  'https://hrfecproductimages.s3-us-west-1.amazonaws.com/shopping+(30).webp',
  'https://hrfecproductimages.s3-us-west-1.amazonaws.com/shopping+(31).webp',
  'https://hrfecproductimages.s3-us-west-1.amazonaws.com/shopping+(32).webp',
  'https://hrfecproductimages.s3-us-west-1.amazonaws.com/shopping+(33).webp',
  'https://hrfecproductimages.s3-us-west-1.amazonaws.com/shopping+(34).webp',
  'https://hrfecproductimages.s3-us-west-1.amazonaws.com/shopping+(35).webp',
  'https://hrfecproductimages.s3-us-west-1.amazonaws.com/shopping+(36).webp',
  'https://hrfecproductimages.s3-us-west-1.amazonaws.com/shopping+(37).webp',
  'https://hrfecproductimages.s3-us-west-1.amazonaws.com/shopping+(38).webp',
  'https://hrfecproductimages.s3-us-west-1.amazonaws.com/shopping+(39).webp',
  'https://hrfecproductimages.s3-us-west-1.amazonaws.com/shopping+(40).webp',
  'https://hrfecproductimages.s3-us-west-1.amazonaws.com/shopping+(41).webp',
  'https://hrfecproductimages.s3-us-west-1.amazonaws.com/shopping+(42).webp',
  'https://hrfecproductimages.s3-us-west-1.amazonaws.com/shopping+(43).webp',
  'https://hrfecproductimages.s3-us-west-1.amazonaws.com/shopping+(44).webp',
  'https://hrfecproductimages.s3-us-west-1.amazonaws.com/shopping+(45).webp',
  'https://hrfecproductimages.s3-us-west-1.amazonaws.com/shopping+(46).webp',
  'https://hrfecproductimages.s3-us-west-1.amazonaws.com/shopping+(47).webp',
  'https://hrfecproductimages.s3-us-west-1.amazonaws.com/shopping+(48).webp',
  'https://hrfecproductimages.s3-us-west-1.amazonaws.com/shopping+(49).webp',
  'https://hrfecproductimages.s3-us-west-1.amazonaws.com/shopping+(50).webp',
  'https://hrfecproductimages.s3-us-west-1.amazonaws.com/shopping+(51).webp',
  'https://hrfecproductimages.s3-us-west-1.amazonaws.com/shopping+(52).webp',
  'https://hrfecproductimages.s3-us-west-1.amazonaws.com/shopping+(53).webp',
  'https://hrfecproductimages.s3-us-west-1.amazonaws.com/shopping+(54).webp',
  'https://hrfecproductimages.s3-us-west-1.amazonaws.com/shopping+(55).webp',
  'https://hrfecproductimages.s3-us-west-1.amazonaws.com/shopping+(56).webp',
  'https://hrfecproductimages.s3-us-west-1.amazonaws.com/shopping+(57).webp',
  'https://hrfecproductimages.s3-us-west-1.amazonaws.com/shopping+(58).webp',
  'https://hrfecproductimages.s3-us-west-1.amazonaws.com/shopping+(59).webp',
  'https://hrfecproductimages.s3-us-west-1.amazonaws.com/shopping+(60).webp',
  'https://hrfecproductimages.s3-us-west-1.amazonaws.com/shopping+(61).webp',
  'https://hrfecproductimages.s3-us-west-1.amazonaws.com/shopping+(62).webp',
  'https://hrfecproductimages.s3-us-west-1.amazonaws.com/shopping+(63).webp',
  'https://hrfecproductimages.s3-us-west-1.amazonaws.com/shopping+(64).webp',
  'https://hrfecproductimages.s3-us-west-1.amazonaws.com/shopping+(65).webp',
  'https://hrfecproductimages.s3-us-west-1.amazonaws.com/shopping+(66).webp',
  'https://hrfecproductimages.s3-us-west-1.amazonaws.com/shopping+(67).webp',
  'https://hrfecproductimages.s3-us-west-1.amazonaws.com/shopping+(68).webp',
  'https://hrfecproductimages.s3-us-west-1.amazonaws.com/shopping+(69).webp',
  'https://hrfecproductimages.s3-us-west-1.amazonaws.com/shopping+(70).webp',
  'https://hrfecproductimages.s3-us-west-1.amazonaws.com/shopping+(71).webp',
  'https://hrfecproductimages.s3-us-west-1.amazonaws.com/shopping+(72).webp',
  'https://hrfecproductimages.s3-us-west-1.amazonaws.com/shopping+(73).webp',
  'https://hrfecproductimages.s3-us-west-1.amazonaws.com/shopping+(74).webp',
  'https://hrfecproductimages.s3-us-west-1.amazonaws.com/shopping+(75).webp',
  'https://hrfecproductimages.s3-us-west-1.amazonaws.com/shopping+(76).webp',
  'https://hrfecproductimages.s3-us-west-1.amazonaws.com/shopping+(77).webp',
  'https://hrfecproductimages.s3-us-west-1.amazonaws.com/shopping+(78).webp',
  'https://hrfecproductimages.s3-us-west-1.amazonaws.com/shopping+(79).webp',
  'https://hrfecproductimages.s3-us-west-1.amazonaws.com/shopping+(80).webp',
  'https://hrfecproductimages.s3-us-west-1.amazonaws.com/shopping+(81).webp',
  'https://hrfecproductimages.s3-us-west-1.amazonaws.com/shopping+(82).webp',
  'https://hrfecproductimages.s3-us-west-1.amazonaws.com/shopping+(83).webp',
  'https://hrfecproductimages.s3-us-west-1.amazonaws.com/shopping+(84).webp',
  'https://hrfecproductimages.s3-us-west-1.amazonaws.com/shopping+(85).webp',
  'https://hrfecproductimages.s3-us-west-1.amazonaws.com/shopping+(86).webp',
  'https://hrfecproductimages.s3-us-west-1.amazonaws.com/shopping+(87).webp',
  'https://hrfecproductimages.s3-us-west-1.amazonaws.com/shopping+(88).webp',
  'https://hrfecproductimages.s3-us-west-1.amazonaws.com/shopping+(89).webp',
  'https://hrfecproductimages.s3-us-west-1.amazonaws.com/shopping+(90).webp',
  'https://hrfecproductimages.s3-us-west-1.amazonaws.com/shopping+(91).webp',
  'https://hrfecproductimages.s3-us-west-1.amazonaws.com/shopping+(92).webp',
  'https://hrfecproductimages.s3-us-west-1.amazonaws.com/shopping+(93).webp',
  'https://hrfecproductimages.s3-us-west-1.amazonaws.com/shopping+(94).webp',
  'https://hrfecproductimages.s3-us-west-1.amazonaws.com/shopping+(95).webp',
  'https://hrfecproductimages.s3-us-west-1.amazonaws.com/shopping+(96).webp',
  'https://hrfecproductimages.s3-us-west-1.amazonaws.com/shopping+(97).webp',
  'https://hrfecproductimages.s3-us-west-1.amazonaws.com/shopping+(98).webp',
  'https://hrfecproductimages.s3-us-west-1.amazonaws.com/shopping+(99).webp',
  'https://hrfecproductimages.s3-us-west-1.amazonaws.com/shopping+(100).webp'
];
const brands = [
  'Tomberlond',
  'Guqqi',
  'Barenciala',
  'Crogs',
  'Givilchy',
  'Valentenough',
  'Proda',
  'Flemdy',
  'Yoozy',
  'Gole & Chabana'
];

const description = [
  'So Shoe Right Now',
  'Very Comfy Shoe',
  'Extra Classy Shoe',
  'Shouldve Gone to Walmart Shoe',
  'Looks Like it Tickles Shoe',
  'Bootlike Shoe',
  'So Much Money Shoe',
  'Only Fivehundred Shoe',
  'Send Me Your Money Instead Shoe',
  'LOL Shoe',
  'Naahhhhh Shoe',
  'EXTREME Shoe',
  'Fancy Shoe',
  'Look so Shoe',
  'Can You Believe Shoe',
  'Shoe Shoe',
  'Cant Even Shoe',
  'Kanye Shoe',
  'Shoe',
  'Lets Get Some Shoe',
  'Baked Beans'
];

const stars = [
  '⭑',
  '⭑⭑',
  '⭑⭑⭑',
  '⭑⭑⭑⭑',
  '⭑⭑⭑⭑⭑'
];

// container for randomly generated product data to be seeded
const data = [];

var generateData = function() {
  for (var i = 0; i < images.length; i++) {
    data.push({
      product_image: images[i],
      product_brand: brands[Math.floor(Math.random() * brands.length)],
      product_description: description[Math.floor(Math.random() * description.length)],
      product_long_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      product_price: Math.floor(Math.random() * 250000) / 100,
      product_rating_num: Math.floor(Math.random() * 150),
      product_rating_avg: stars[Math.floor(Math.random() * stars.length)]
    })
  }
}

const seedDatabase = function() {
  Product.deleteMany({})
  .then(Product.create(data))
  // .then(db.close()); <----- crashes the app, close DB yourself after running seed
}

generateData();
seedDatabase();