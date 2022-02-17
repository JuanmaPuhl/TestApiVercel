const express = require("express")
const router = express.Router()

router.get("/", async(req,res) => {
    res.send("Hello World from api")
})

router.get("/apiloca", (req,res)=>{
    res.send("locuraza")
})

router.get("/apiloca2", (req,res)=>{
    res.send("locuraza2")
})

router.get("/apiloca3", (req,res)=>{
    res.send("locuraza3")
})

router.get("/apiloca4", (req,res)=>{
    res.send("locuraza4")
})

router.get("/apiloca5", (req,res)=>{
    res.send("locuraza5")
})

router.get("/apiloca6", (req,res)=>{
    res.send("locuraza6")
})

router.get("/apiloca7", (req,res)=>{
    res.send("locuraza7")
})

router.get("/apiloca8", (req,res)=>{
    res.send("locuraza8")
})

router.get("/apiloca9", (req,res)=>{
    res.send("locuraza9")
})

router.get("/apiloca10", (req,res)=>{
    res.send("locuraza10")
})

router.get("/apiloca11", (req,res)=>{
    res.send("locuraza11")
})

router.get("/apiloca12", (req,res)=>{
    res.send("locuraza12")
})

router.get("/apiloca13", (req,res)=>{
    res.send("locuraza13")
})

router.post("/", (req,res)=>{
    res.send("A POST REQUEST")
})

module.exports = router