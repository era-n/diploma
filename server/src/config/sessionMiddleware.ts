import * as session from 'express-session';
import { COOKIE_NAME } from '../utils/constants';
import { redis } from './redis';
import * as connectRedis from 'connect-redis';

const RedisStore = connectRedis(session);

export const sessionMiddleware: any = session({
  name: COOKIE_NAME,
  store: new RedisStore({
    client: redis as any,
    disableTouch: true,
  }),
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
    httpOnly: true,
    sameSite: 'lax', // csrf
    secure: false, // cookie only works in https,
  },
  saveUninitialized: false,
  secret: '4"z87nk};&"nkf:dG(wwNz/+jEYhXr2Reff/{FGy!#28(/L8H]vuG;%[!Y~-7Qq',
  resave: true,
  rolling: true,
});
