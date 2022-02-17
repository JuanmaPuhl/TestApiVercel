const express = require("express")
const router = express.Router()

router.get("/", async(req,res) => {
    res.send("Hello World from api")
})

router.get("/apiloca", (req,res)=>{
    res.send("locuraza")
})

router.post("/", (req,res)=>{
    res.send("A POST REQUEST")
})

module.exports = router