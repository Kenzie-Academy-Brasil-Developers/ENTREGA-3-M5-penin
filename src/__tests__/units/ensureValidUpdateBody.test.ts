import { NextFunction, Request, Response } from "express";
import { EnsureMiddleware } from "../../middlewares/ensure.middleware";
import { invalidUpdateBodyMock, validUpdateBodyMock, validUpdateSchemaMock } from "../__mocks__/units/ensureValidUpdateBody.mock";
const ensure = new EnsureMiddleware()

describe("Unit test: Ensure Valid Update Body middleware", () => {
  const validBodyMiddleware = ensure.validBody(validUpdateSchemaMock);

  let req: Partial<Request> = {};
  let res: Partial<Response> = {};
  let next: NextFunction = jest.fn();

  beforeEach(() => {
    next = jest.fn();
  });

  test("Should be able to validate a update request body.", () => {
    req.body = validUpdateBodyMock.bodyData;

    validBodyMiddleware(req as Request, res as Response, next);

    expect(req.body).toStrictEqual(validUpdateBodyMock.expectedValue);
    expect(next).toHaveBeenCalled();
    expect(next).toHaveBeenCalledTimes(1);
  });

  test("Shoud throw error when validating invalid update body.", () => {
    req.body = invalidUpdateBodyMock.bodyData;

    expect(() => {
      validBodyMiddleware(req as Request, res as Response, next);
    }).toThrow(invalidUpdateBodyMock.expectedValue);

    expect(next).not.toHaveBeenCalled();
  });
});