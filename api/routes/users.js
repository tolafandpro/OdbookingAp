const express = require("express");
const router = express.Router();


router.get("/", (req, res) => {
    res.send("This the users endpoint").status(200);
} )


module.exports = router;