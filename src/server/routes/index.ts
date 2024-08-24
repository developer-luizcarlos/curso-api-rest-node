import { Router,Request,Response } from 'express';
import { StatusCodes } from 'http-status-codes';

const router = Router();

router.get("/teste",function (req: Request,res: Response) {
  res.status(StatusCodes.ACCEPTED);
  res.send("ok");
});

export default router;