import { Request, Response } from "express";
import { UserServices } from "./../services/userServices.services";
import { inject, injectable } from "tsyringe";

@injectable()
export class UserControllers {
  constructor(@inject("UserServices") private userServices: UserServices) {}
  async register(req: Request, res: Response): Promise<Response> {
    const response = await this.userServices.register(req.body);

    return res.status(201).json(response);
  }
  async login(req: Request, res: Response): Promise<Response> {
    const response = await this.userServices.login(req.body);

    return res.status(200).json(response);
  }
  async getUser(req: Request, res: Response): Promise<Response> {
    const { id } = res.locals.decode;

    const response = await this.userServices.getUser(id);

    return res.status(200).json(response);
  }
}
