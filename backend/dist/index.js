"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express.Router();
app.get("/api/v1", (req, res) => {
    res.json({
        msg: "hello from index.ts"
    });
});
app.listen(3000, console.log("Listening from port 3000..."));
