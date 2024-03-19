import { prisma } from "../../database/prisma";
import { carCreateBodyListMock } from "../__mocks__/car.mocks";
import { request } from "../utils/request";
import { carDefaultExpects } from "../utils/carDefaultExpects";

describe("Integration test: get many cars", () => {
    beforeEach(async () => {
        await prisma.$transaction([prisma.car.deleteMany()]);
    });

    test("should be able to get many cars successfully", async () => {
        await prisma.car.createMany({ data: carCreateBodyListMock });

        const data = await request
            .get("/cars")
            .expect(200)
            .then((response) => response.body);

        expect(data).toHaveLength(2);

        carDefaultExpects(data[0], carCreateBodyListMock[0]);
        carDefaultExpects(data[1], carCreateBodyListMock[1]);
    });
});