export class WebApiError {
  constructor(status: number, message?: string, payload?: any) {
    this.status = status;
    this.message = message;
  }
  status: number;
  payload?: any;
  message?: string;
}

export class InvalidCategoryIdError extends WebApiError {
  constructor() {
    super(400, 'Failed to find category with a such id.');
  }
}
