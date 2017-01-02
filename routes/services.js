var express = require('express');
var router = express.Router();

var templateData = {
	title: 'Services | Chase the Flavors',
  	header: 'Company Services',
  	services: [
  		{
            "name":"Hardware Repair",
            "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a mollis est, sed dapibus neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae",
            "price_range":"PHP 1000 - PHP 2000",
            "link": '/hardware'
        },
        {
            "name":"Hardware Repair 222",
            "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a mollis est, sed dapibus neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae",
            "price_range":"PHP 1000 - PHP 2000",
            "link": '/hardware'
        }
  	]
}

/* GET services page. */
router.get('/', function(req, res, next) {
  res.render('services', templateData);
});

module.exports = router;
