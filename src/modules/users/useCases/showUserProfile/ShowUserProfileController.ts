import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.headers;
    const userProfile = this.showUserProfileUseCase.execute({
      user_id: String(user_id),
    });
    return response.json(userProfile);
  }
}

export { ShowUserProfileController };
