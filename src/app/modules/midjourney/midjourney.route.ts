import { Router } from 'express';
import { MidjourneyController } from './midjourney.controller';

const router = Router();


router.post('/image', MidjourneyController.MidjourneyImage);



export const MidjourneyRoutes = router;