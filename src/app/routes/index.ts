import { Router } from 'express';


const router = Router();

type ModuleRoute = {

    path: string;
    route: Router;
}

const moduleRoutes: ModuleRoute[] = [
    // {
    //   path: '/users',
    //   route: UserRoutes,
    // },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
