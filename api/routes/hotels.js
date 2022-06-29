const express = require('express');
const router = express.Router();

//READ
router.get("/", (req, res) => {
    res.send("This is the hotels endpoint").status(200);
})

//CREATE
router.post("/", async (req, res)=>{

})
//UPDATE
router.put("/api/:id", (req, res) => {

} );

//DELETE
router.delete("/api/:id")

module.exports = router;