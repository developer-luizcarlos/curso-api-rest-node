import { Router, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

const router = Router();

router.post( "/teste/", function ( req: Request, res: Response ) {
  res.status( StatusCodes.ACCEPTED );
  res.send( req.body );
} );

export default router;