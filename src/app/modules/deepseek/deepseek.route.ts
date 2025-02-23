import { Router } from 'express';
import { DeepSeekController } from './deepseek.controller';

const router = Router();

router.post('/coversation', DeepSeekController.DeepSeekConversation);
router.post('/code', DeepSeekController.DeepSeekCode);
router.post('/image', DeepSeekController.DeepSeekImage);



export const DeepseekRoutes = router;