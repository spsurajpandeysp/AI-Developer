import {Router} from 'express'
import * as userController from '../controllers/user.controller.js';

const router = Router();

router.post('/register',userController.createUserController);
router.post('/login',userController.userLoginController);


export default router;