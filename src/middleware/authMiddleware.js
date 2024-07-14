import jwt from 'jsonwebtoken'
import {get} from '../modules/user/index.js'

export const aurhMiddleware = async (req, res, next) => {
  try {
    const isValid = jwt.verify(req.token, process.env.JWT_SECRET)
    const user = await get(isValid.id)
    req.user = user

    next()
  } catch (error) {
    return res.status(403).json({ message: 'Token inválido' })
  }
}

export default aurhMiddleware
