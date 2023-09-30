import { ExecutionContext, createParamDecorator } from '@nestjs/common';

export const CurrentUser = createParamDecorator(
  (data: never, context: ExecutionContext) => {
    //Normally data: any but since we are not passing anything in @CurrentUser("HERE") data can be never
    const request = context.switchToHttp().getRequest();
    return request.currentUser;
  },
);
