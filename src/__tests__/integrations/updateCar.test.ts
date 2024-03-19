import { prisma } from "../../database/prisma";
import {
    invalidCarId,
    carCreateBodyMock,
    carUpdateBodyMock,
} from "../__mocks__/car.mocks";
import { invalidCarUpdateBodyMock } from "../__mocks__/integrations/ensureValidUpdateBody.mock";
import { request } from "../utils/request";

describe("Integration test: update car", () => {
    const baseUrl = "/cars";
    beforeEach(async () => {
        await prisma.$transaction([prisma.car.deleteMany()]);
    });

    test("should be able to update a car succesfully", async () => {
        const car = await prisma.car.create({ data: carCreateBodyMock });

        const data = await request
            .patch(`/cars/${car.id}`)
            .send(carUpdateBodyMock)
            .expect(200)
            .then((response) => response.body);

        const updateCar = { ...car, ...carUpdateBodyMock };

        expect(data).toStrictEqual(updateCar);
    });

    test("should throw error when car is invalid", async () => {
        await request.patch(`/cars/${invalidCarId}`).expect(404);
    });

    test("Should not be able to update a car - invalid body - invalid keys", async () => {
        const car = await prisma.car.create({ data: carCreateBodyMock });
        const response = await request.patch(`${baseUrl}/${car.id}`).send(invalidCarUpdateBodyMock);

        const expectedValue = {
            issues: [
                {
                    code: "invalid_type",
                    expected: "string",
                    message: "Expected string, received number",
                    path: ["name"],
                    received: "number",
                },
                {
                    code: "invalid_type",
                    expected: "string",
                    message: "Expected string, received number",
                    path: ["description"],
                    received: "number",
                },
                {
                    code: "invalid_type",
                    expected: "string",
                    message: "Expected string, received number",
                    path: ["brand"],
                    received: "number",
                },
                {
                    code: "invalid_type",
                    expected: "number",
                    message: "Expected number, received string",
                    path: ["year"],
                    received: "string",
                }, {
                    code: "invalid_type",
                    expected: "number",
                    message: "Expected number, received boolean",
                    path: ["km"],
                    received: "boolean",
                },
            ],
            name: "ZodError"
        };

        expect(response.body).toStrictEqual(expectedValue);
        expect(response.status).toBe(400);
    });
});