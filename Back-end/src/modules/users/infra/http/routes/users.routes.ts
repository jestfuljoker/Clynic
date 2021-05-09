import uploadConfig from '@config/upload';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import { Router } from 'express';
import multer from 'multer';
import UpdateAvatarController from '../controllers/UpdateAvatarController';
import UserController from '../controllers/UserController';

const usersRouter = Router();
const userController = new UserController();
const updateAvatarController = new UpdateAvatarController();

const upload = multer(uploadConfig);

usersRouter.post('/', userController.create);

usersRouter.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  updateAvatarController.update,
);

export default usersRouter;
