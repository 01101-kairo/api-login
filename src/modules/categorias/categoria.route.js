import {Router} from "express"
import { getAll, get, save, update, remove } from "./index.js"
import { aurhMiddleware } from '../../middleware/authMiddleware.js'

export const router = Router()

router.get('/', aurhMiddleware, async (req,res) => {
  const data = await getAll(req.user.id)
  res.status(200).json({data})
})

router.get('/:id', aurhMiddleware, async (req,res) => {
  const data = await get(req.params.id, req.user.id)
  res.status(200).json({data})
})

router.post('/', aurhMiddleware, async (req,res) => {
  try {
    req.body.user_id = req.user.id
    const data = await save(req.body)
    res.status(200).json({data})
  } catch (error) {
    res.status(500).json({error: error.message})
  }
})

router.put('/:id', aurhMiddleware, async (req,res) => {
  req.body.user_id = req.user.id
  const data = await update(req.params.id, req.body, req.user.id)
  res.status(200).json({data})
})

router.delete('/:id', aurhMiddleware, async (req,res) => {
  const data = await remove(req.params.id, req.user.id)
  res.status(200).json({data})
})

export default router
