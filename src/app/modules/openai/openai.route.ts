import { Router } from 'express';
import { OpenAIController } from './openai.controller';

const router = Router();

router.post('/coversation', OpenAIController.OpenAIConversation);
router.post('/code', OpenAIController.OpenAICode);
router.post('/image', OpenAIController.OpenAIImage);



export const OpenAIRoutes = router;