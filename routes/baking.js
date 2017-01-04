var express = require('express');
var router = express.Router();

var templateData = {
	title: 'Services | Chase the Flavors',
  	header: 'Company Services',
  	services: [
  		{
            "name":"Baking & Pastry Classes",
            "description":"A very fun and interactive way to learn baking techniques as well as make your own delicacy; you just might surprise yourself. We are offering you a unique opportunity to learn the Art of Pastry & Bakery. We are dedicated to the art of pastry and it is our goal to be the finest pastry fellows in Asia, producing the best-prepared professionals entering the industry. Promoting lifelong learning by providing continuing education courses for graduates, professionals and food enthusiasts. Contact Sous Chef Alejandro for more details and ideas at (639)-05802-5348. We offer cooking classes for large or small groups.",
            "price_range":"PHP 10,000 (15 hours per week)",
            "link": '/hardware'
        },
  	]
}

/* GET baking page. */
router.get('/', function(req, res, next) {
  res.render('baking', templateData);
});

module.exports = router;
