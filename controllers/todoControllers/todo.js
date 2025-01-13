import express from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const app = express();




export const todo = async(req,res) => {
    try{

     const { name, description } = await req.body;
     if (!name || !description) {
       return res.status(400).json({success:false, message: 'Name and description are required' });
     }
     const response = await prisma.todo.create({
      data:{
        name,
        description,
      }
     })
     return res.status(201).json({ success: true, message: 'Todo created'});        
    } catch(err){
        res.status(500).json({success: false, message: 'Failed to create todo'});
    }
}


export const getTodo = async (req,res) => {
   try{
     const todos = await prisma.todo.findMany();
     return res.status(200).json({ success: true, data: todos });
   } catch(err){
     res.status(500).json({success: false, message: 'Failed to get todos'});
   }
}