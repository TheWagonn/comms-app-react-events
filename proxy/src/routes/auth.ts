import { communications } from '@dolbyio/dolbyio-rest-apis-client';
import express from 'express';

import { env } from '../utils/env';

const router = express.Router();

const KEY = env('KEY');
const SECRET = env('SECRET');

router.post('/access_token', async (req, res) => {
  try {
    const token = await communications.authentication.getClientAccessToken(KEY, SECRET, 3600);
    return res.status(200).send({ data: token });
  } catch (e) {
    return res.status(500).send(e);
  }
});

export default router;
