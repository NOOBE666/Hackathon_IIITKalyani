import express from 'express'
import business from './registration.js';
import { jwt_validator } from './jwt_validator.js';
export const router=express.Router();

router.post('/businesssignup',)
router.post('/businesssignin',)

router.get('/dashboard',jwt_validator,)
