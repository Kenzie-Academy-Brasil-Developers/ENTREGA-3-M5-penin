import { prisma } from "../../database/prisma";
import { invalidCarId, carCreateBodyMock } from "../__mocks__/car.mocks";
import { request } from "../utils/request";

describe("Integration test: delete car", () => {
    test("should be able to delete a car successfully", async () => {
        const car = await prisma.car.create({ data: carCreateBodyMock });

        await request.delete(`/cars/${car.id}`).expect(204);
    });

    test("should throw error when car is invalid", async () => {
        await request.delete(`/cars/${invalidCarId}`).expect(404);
    });
});