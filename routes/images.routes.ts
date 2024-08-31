import ( Router) from 'express' ;

const imageRouter = Router();

imageRouter.get('/:type/:image', imageController);

export default imageRouter;

