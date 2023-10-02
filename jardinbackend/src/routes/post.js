const { Router } = require("express")
const router = Router()

const postCrtl = require("../controllers/post")

router.get("/", postCrtl.getPosts)

router.post("/", postCrtl.createPost)

router.put("/:id", postCrtl.updatePost)

router.delete("/:id", postCrtl.deletePost)

module.exports = router;