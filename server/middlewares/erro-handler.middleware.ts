import { Request, Response  }from 'express';

export function ErrorHanlderMiddleware (err, req, res: Response, next) {
    console.log(err);
   // res.status(500).json(err);
}