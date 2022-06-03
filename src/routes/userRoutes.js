import { Router } from 'express';
import UserController from '../controllers/UserController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Shoud not exist
// router.get('/', UserController.index); // Lista users
// router.show('/:id', UserController.show); // Lista user

router.post('/', UserController.store);
router.put('/', loginRequired, UserController.update);
router.delete('/', loginRequired, UserController.delete);
export default router;
