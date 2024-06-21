"use server"

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getUser = async()=>{
    return await prisma.user.findMany()
}

export const addUser = async(data:{name:string,email:string,password:string})=>{
    return await prisma.user.create({
        data:data
    })
}

export const getUserAuth = async()=>{
    return await prisma.userAuth.findMany()
}

export const addUserAuth = async(data:{name:string,email:string,image:string})=>{
    return await prisma.userAuth.create({
        data:data
    })
}