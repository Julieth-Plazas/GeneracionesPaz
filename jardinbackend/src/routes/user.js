const { Router } = require("express")
const router = Router()

const userCtrl = require("../controllers/user")

router.get("/", userCtrl.getUsers)

router.post("/", userCtrl.createUser)

router.get("/:id", userCtrl.getUser)

router.put("/:id", userCtrl.updateUser)

router.delete("/:id", userCtrl.deleteUser)

module.exports = router;