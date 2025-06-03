export class ApiError extends Error {
  public statusCode: number;

  constructor(statusCode: number, message: string, public success = false) {
    super(message);

    this.statusCode = statusCode;

    Error.captureStackTrace(this);
  }
}
