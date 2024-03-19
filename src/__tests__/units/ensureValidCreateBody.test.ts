import { NextFunction, Request, Response } from "express";
import { EnsureMiddleware } from "../../middlewares/ensure.middleware";
import { invalidCreateBodyMock, validCreateBodyMock, validCreateSchemaMock } from "../__mocks__/units/ensureValidCreateBody.mock";
const ensure = new EnsureMiddleware()

describe("Unit test: Ensure Valid Create Body middleware", () => {
  const validBodyMiddleware = ensure.validBody(validCreateSchemaMock);

  let req: Partial<Request> = {};
  let res: Partial<Response> = {};
  let next: NextFunction = jest.fn();

  beforeEach(() => {
    next = jest.fn();
  });

  test("Should be able to validate a create request body.", () => {
    req.body = validCreateBodyMock.bodyData;

    validBodyMiddleware(req as Request, res as Response, next);

    expect(req.body).toStrictEqual(validCreateBodyMock.expectedValue);
    expect(next).toHaveBeenCalled();
    expect(next).toHaveBeenCalledTimes(1);
  });

  test("Shoud throw error when validating invalid create body.", () => {
    req.body = invalidCreateBodyMock.bodyData;

    expect(() => {
      validBodyMiddleware(req as Request, res as Response, next);
    }).toThrow(invalidCreateBodyMock.expectedValue);

    expect(next).not.toHaveBeenCalled();
  });
});