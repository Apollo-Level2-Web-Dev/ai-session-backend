import { Router } from 'express';
import { DeepseekRoutes } from '../modules/deepseek/deepseek.route';
import { MidjourneyRoutes } from '../modules/midjourney/midjourney.route';
import { OpenAIRoutes } from '../modules/openai/openai.route';
import { SubscriptionRoutes } from '../modules/userSubscription/userSubscription.route';


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
        path: "/stripe",
        route: SubscriptionRoutes
    }
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
