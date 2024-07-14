import {Router} from "express"
import { getAll, get, save, update, remove } from "./index.js"
import { aurhMiddleware } from '../../middleware/authMiddleware.js'

export const router = Router()

router.get('/', async (_,res) => {
  const data = await getAll()
  res.status(200).json({data})
})

router.get('/me', aurhMiddleware, async (req,res) => {
  return res.status(200).json({data: req.user})
})

router.get('/:id', async (req,res) => {
  const data = await get(req.params.id)
  res.status(200).json({data})
})

router.post('/', async (req,res) => {
  try {
    const data = await save(req.body)
    res.status(200).json({data})
  } catch (error) {
    res.status(500).json({error: error.message})
  }
})

router.put('/:id', async (req,res) => {
  const data = await update(req.params.id, req.body)
  res.status(200).json({data})
})

router.delete('/:id', async (req,res) => {
  const data = await remove(req.params.id)
  res.status(200).json({data})
})

export default router
