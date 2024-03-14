import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import { Secret } from 'jsonwebtoken';
import config from '../../config';
import ApiError from '../../errors/ApiError';
import { jwtHelpers } from '../../helpers/jwtHelpers';

const auth =
  (...requiredRoles: string[]) =>
  async (req: Request, res: Response, next: NextFunction) => {
    return new Promise((resolve, reject) => {
      const token = req.headers.authorization;

      if (!token) {
        return reject(new ApiError(httpStatus.UNAUTHORIZED, '401'));
      }

      const verifiedUser = jwtHelpers.verifyToken(
        token,
        config.jwt.secret as Secret
      );

      req.user = verifiedUser;

      if (requiredRoles.length && !requiredRoles.includes(verifiedUser.role)) {
        return reject(new ApiError(httpStatus.FORBIDDEN, 'Forbidden'));
      }

      resolve(verifiedUser);
    })
      .then(() => next())
      .catch(err => next(err));
  };

export default auth;
