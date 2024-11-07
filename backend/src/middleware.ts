import { NextFunction, Request, Response } from "express";

const jwt = require("jsonwebtoken");

const authMiddleWare = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith("Bearer ")) {
        res.status(411).json({
            msg: "Invalid token format/ Empty token"
        });
    }

    const token = authHeader?.split(' ')[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.body.userId = decoded.userId;
        next();
    } catch(error) {
        res.status(411).json({
            msg: "Cannot decode token"
        });
    }
} 

module.exports = { authMiddleWare };