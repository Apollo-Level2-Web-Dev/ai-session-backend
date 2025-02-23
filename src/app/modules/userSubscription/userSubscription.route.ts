import { Router } from 'express';
import { StripeController } from './userSubscription.controller';

const router = Router();

router.get('/subscribe', StripeController.StripeSubscribe);




export const SubscriptionRoutes = router;