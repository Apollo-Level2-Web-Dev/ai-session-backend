import { Router } from 'express';
import { OpenAIRoutes } from '../modules/openai/openai.route';


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
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
