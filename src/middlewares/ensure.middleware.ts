import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";
import { prisma } from "../database/prisma";
import { AppError } from "../errors/appErros";

export class EnsureMiddleware {
    public validBody =
        (schema: AnyZodObject) =>
            (req: Request, _: Response, next: NextFunction): void => {
                req.body = schema.parse(req.body);

                return next();
            };

    public bodyCarIdExists = async (
        { body: { carId } }: Request,
        _: Response,
        next: NextFunction
    ): Promise<void> => {
        const foundCar = await prisma.car.findFirst({
            where: { id: carId },
        });

        if (!foundCar) {
            throw new AppError(404, "Car not found.");
        }

        return next();
    };
}
