import { verify } from 'jsonwebtoken'
import { Context } from './context'

export const APP_SECRET = process.env.APP_SECRET!

interface Token {
  userId: string
}

export function getUserId(context: Context) {
  const authorization = context.authorization
  if (authorization) {
    const token = authorization.replace('Bearer ', '')
    const verifiedToken = verify(token, APP_SECRET) as Token
    return verifiedToken && verifiedToken.userId
  }
}