import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { authMiddleWare } from "../middleware";

const express = require("express");
const prisma = new PrismaClient();
const zod = require("zod");

const router = express.Router();

router.get("/blogs", authMiddleWare, async (req: Request, res: Response) => {
    const blogs = await prisma.blog.findMany();
    res.json({
        blogs
    });
});

router.get("/blogs/:blogId", authMiddleWare, async (req: Request, res: Response) => {
    const blogId = req.params.blogId
    const blogs = await prisma.blog.findUnique({
        where: {
            blogId: parseInt(blogId)
        }
    });
    res.json({
        blogs
    });
});

const createBlogBody = zod.object({
    userId: zod.number().int(),
    title: zod.string(),
    description: zod.string()
});

router.post("/create", authMiddleWare, async (req: Request, res: Response) => {
    const body = req.body;
    const { success } = createBlogBody.safeParse(body);
    if(!success) {
        res.status(411).json({
            msg: "invalid format"
        });
    }
    const blog = await prisma.blog.create({
        data: body
    });
    res.status(200).json({
        blog
    });
})

const updateBlogBody = zod.object({
    userId: zod.number().int(),
    title: zod.string(),
    description: zod.string(),
    blogId: zod.number().int()
});

router.post("/update", authMiddleWare, async (req: Request, res: Response) => {
    const body = req.body;
    const { success } = updateBlogBody.safeParse(body);

    if (!success) {
        return res.status(411).json({ msg: "invalid format" });
    }

    const updatedBlog = await prisma.blog.updateMany({
        where: {
            blogId: body.blogId, 
            userId: body.userId
        },
        data: body
    });

    if (!updatedBlog.count) { 
        return res.status(411).json({ msg: "could not update blog/ blog not found" });
    }

    return res.status(200).json({ updatedBlog });
});

const deleteBlogBody = zod.object({
    userId: zod.number().int(),
    blogId: zod.number().int()
});

router.post("/delete", authMiddleWare, async (req: Request, res: Response) => {
    const body = req.body;
    const { success } = deleteBlogBody.safeParse(body);

    if (!success) {
        return res.status(411).json({ msg: "invalid format" });
    }

    const deletedBlog = await prisma.blog.deleteMany({
        where: {
            blogId: body.blogId, 
            userId: body.userId
        }
    });

    if(!deletedBlog.count) { 
        return res.status(411).json({ msg: "could not delete blog/ blog not found" });
    }

    return res.status(200).json({ msg: "Blog deleted successfully", deletedBlog });

});

module.exports = router;