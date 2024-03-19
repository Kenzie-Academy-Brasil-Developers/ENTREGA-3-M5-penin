import { AnyZodObject } from "zod";
import { prisma } from "../database/prisma";
import { TCar, TCarCreateBody, TCarUpdateBody, carSchema } from "../schemas/car.schemas";

export class CarServices {
    public async create(body: TCarCreateBody): Promise<TCar> {
        const newCar = await prisma.car.create({ data: body });

        return carSchema.parse(newCar);
    };

    public async getMany(): Promise<TCar[]> {
        const carList = await prisma.car.findMany();

        return carList;
    };

    public async getOne(id: string): Promise<TCar | null> {
        const data = await prisma.car.findFirst({
            where: { id: id }
        });
        return data;
    };;

    public async update(body: TCarUpdateBody, updatingId: string): Promise<TCar> {
        const updateCar: TCar = await prisma.car.update({
            where: { id: updatingId },
            data: body,
        });

        return carSchema.parse(updateCar);
    };

    public async delete(removingId: string): Promise<void> {
        await prisma.car.delete({ where: { id: removingId } });
    };
}