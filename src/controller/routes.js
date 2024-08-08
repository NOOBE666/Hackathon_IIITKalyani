import express from 'express'
import business from './registration.js';
import PageController from './page.js';
import { jwt_validator } from './jwt_validator.js';
import { pushlocation } from '../APIs/pushlocation.business.js';
import { getlocation_business } from '../APIs/getlocation.business.js';
// import BusinessController from './Business.controller.js';

const pages=new PageController();
const business_obj= new business();
const routes=express.Router();

routes.route('/').get(pages.business)
routes.post('/businesssignup',business_obj.add_user)
routes.route('/businesssignin').post(business_obj.find_user);

routes.route('/:_id/go_live').get(business_obj.golive);

routes.route('/:_id/dashboard').get(business_obj.dashboard);

routes.route('/:_id/addstations').post(business_obj.addstations);

routes.route('/locationupdate/:id').post(pushlocation);

routes.route('/:id/deletestation/:_id').get(business_obj.deletestations);

routes.route('/getlocation/:id').get(getlocation_business);

export default routes;
