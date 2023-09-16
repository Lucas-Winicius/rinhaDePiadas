import { Request, Response } from "express";
import Validate from "../../../lib/UserValidations";
import prisma from "../../../lib/prisma";
import jwt from "../../../lib/jwt";

async function Create(req: Request, res: Response) {
  const body = req.body;

  const errors = Validate(body);

  if (errors.length) {
    return res.status(400).json({ errors });
  }

  try {
    const user = await prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
        nick: body.nick,
        pass: body.pass,
      },
    });

    const userToken = jwt.create(user);

    return res.status(200).json({ user, userToken });
  } catch (e) {
    return res.status(500).json(e);
  }
}

export default Create;
