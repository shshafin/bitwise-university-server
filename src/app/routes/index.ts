import { Router } from "express";
import { studentRoute } from "../modules/student/student.route";

const router = Router();

const moduleRoute = [
  {
    path: "/students",
    route: studentRoute,
  },
];

// route loop
moduleRoute.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
