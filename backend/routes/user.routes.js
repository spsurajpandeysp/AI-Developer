import {Router} from 'express'
import * as userController from '../controllers/user.controller.js';
import * as authMiddleware from '../middleware/auth.middleware.js'
const router = Router();

router.post('/register',userController.createUserController);
router.post('/login',userController.userLoginController);
router.get('/profile',authMiddleware.authUser,userController.profileController);
router.get('/logout',authMiddleware.authUser,userController.userLogoutController);


export default router;