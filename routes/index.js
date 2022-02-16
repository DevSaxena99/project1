const express= require('express');
const router=express.Router();
console.log("router loaded sucessfully");
const homeController=require('../controllers/home_controllers');
router.get('/',homeController.home);
router.get('/country',homeController.country);
router.post('/country/search',homeController.country_search);
router.get('/place',homeController.place);
router.post('/place/search',homeController.place_search);

module.exports=router;
