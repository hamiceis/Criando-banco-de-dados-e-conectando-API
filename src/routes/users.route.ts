import { NextFunction, Request, Response, Router } from "express";
import { CREATED, OK } from 'http-status-codes';
import userRepository from "../repositories/user.repository";

const usersRoute = Router()


usersRoute.get('/users', async (req :Request, res: Response, next: NextFunction) => {
  const users = await userRepository.findAllUsers()
  res.status(OK).send(users)
})

usersRoute.get('/users/:uuid', ( req: Request, res: Response, next: NextFunction) => {
  const uuid = req.params.uuid
  res.status(OK).json({ uuid })
})

usersRoute.post('/users', (req :Request, res: Response, next: NextFunction) => {
  const newUser = req.body;
  res.status(CREATED).send(newUser)
})

usersRoute.put('/users/:uuid', (req: Request<{ uuid: string}>, res: Response, next: NextFunction) => {
  const uuid = req.params.uuid
  const modifiedUser = req.body

  modifiedUser.uuid = uuid;

  res.status(OK).send(modifiedUser)
})

usersRoute.delete('/users/:uuid', (req: Request<{ uuid: string}>, res: Response, next: NextFunction) => {
  const uuid = req.params.uuid
  res.sendStatus(OK)
})

export { usersRoute };
