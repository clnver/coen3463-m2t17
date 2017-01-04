var express = require('express');
var router = express.Router();

var templateData = {
	title: 'Services | Chase the Flavors',
  	header: 'Company Services',
  	services: [
  		{
            "name":"Diet Meal Plan",
            "description":"We focus on serving a healthy balance of carbohydrates, proteins and vegetables designed to help you lose weight. We offer different calorie options for you to choose from depending on your requirements. Here in the LBD, we try to limit salt, sugar and fat content to really help you achieve a well-maintained body the healthy way. We make your meals a few hours prior to delivery to ensure the freshness and quality you deserve. Although this is a diet delivery service, we try our best to make it the most delicious diet food you’ve ever tasted, using different herbs and spices to enhance the flavor of your meals. We also have an in-house dietitian who computes all the ingredients in the menu to make sure it stays within your required calorie range. Our extensive menu, prepared by the Executive Chef, is good for about 90 days without necessarily repeating a combination. We make your meals a few hours prior to delivery to ensure the freshness and quality you deserve. Although this is a diet delivery service, we try our best to make it the most delicious diet food you’ve ever tasted, using different herbs and spices to enhance the flavor of your meals. We also have an in-house dietitian who computes all the ingredients in the menu to make sure it stays within your required calorie range. Our extensive menu, prepared by the Executive Chef, is good for about 90 days without necessarily repeating a combination.",
            "price_range":"PHP 1,600- PHP 3,000 per week"
        },
  	]
}

/* GET dietmealplan page. */
router.get('/', function(req, res, next) {
  res.render('diet', templateData);
});

module.exports = router;
