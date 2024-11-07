import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const express = require("express");
const jwt = require("jsonwebtoken");
const zod = require("zod");
const prisma = new PrismaClient();

const router = express.Router();

router.get("/users/:id", async (req: Request, res: Response) => {
	const user = await prisma.user.findUnique({
		where: {
			userId: parseInt(req.params.id)
		}
	});
    res.json({
        user
    });
});

const signUpBody = zod.object({
	username: zod.string().email(),
	name: zod.string().optional(),
	password: zod.string().min(8)
});

router.post("/signup", async (req: Request, res: Response) => {
	const body = req.body;
	const validate = signUpBody.safeParse(body);
	if(!validate.success) {
		res.status(403).json({
			error: "Invalid format"
		});
	}
	const existingUser = await prisma.user.findUnique({
		where: { username: body.username }
	});
	if (existingUser) {
		return res.status(409).json({ error: "User already exists" });
	}
	const user = await prisma.user.create({
		data: body
	});
	
	if(user) {
		const token = jwt.sign({
			userId: user.userId
		}, process.env.JWT_SECRET);
		
		res.status(200).json({
			token
		})
		return;
	}
})

const signInBody = zod.object({
	username: zod.string().email(),
	password: zod.string().min(8)
});

router.post("/signin", async (req: Request, res: Response) => {
	const body = req.body;
	const validate = signInBody.safeParse(body);
	if(!validate.success) {
		res.status(403).json({
			error: "Invalid format"
		});
	}
	const user = await prisma.user.findUnique({
		where: {
			username: body.username,
			password: body.password
		}
	});
	
	if(user) {
		const token = jwt.sign({
			userId: user.userId
		}, process.env.JWT_SECRET);
		
		res.status(200).json({
			token
		})
		return;
	}
	
})

module.exports = router;