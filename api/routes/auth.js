const express = require("express");
const router = express.Router();

router.get("/", (req, res)=>{
    res.send("working from the auth router").status(200)
})


module.exports = router;