const express = require("express")
const router = express.Router()

const testController = require("../controllers/testController")

router.get("/", testController.testConnection)
router.get("/tables", testController.listTable)

module.exports = router