import express from "express"
import { getDBDataDetails, isAdmin } from "../index.js"

const router = express.Router()

router.get("/db", isAdmin ,getDBDataDetails)

export default router