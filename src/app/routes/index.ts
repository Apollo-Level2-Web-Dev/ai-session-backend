import { Router } from 'express';
import { DeepseekRoutes } from '../modules/deepseek/deepseek.route';
import { MidjourneyRoutes } from '../modules/midjourney/midjourney.route';
import { OpenAIRoutes } from '../modules/openai/openai.route';
import { PaymentRoutes } from '../modules/payment/payment.route';


const router = Router();

type ModuleRoute = {

    path: string;
    route: Router;
}

const moduleRoutes: ModuleRoute[] = [
    {
        path: '/openai',
        route: OpenAIRoutes

    },

    {
        path: "/deepseek",
        route: DeepseekRoutes
    },

    {
        path: "/midjourney",
        route: MidjourneyRoutes
    },

    {
        path : "/payment",
        route : PaymentRoutes
    }
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
