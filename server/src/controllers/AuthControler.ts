import {Request,Response} from 'express';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken'

import db from '../database/connection';
import {jwtConfig} from '../config'

const tokenGen = (id:string) => jwt.sign(id,jwtConfig.secret)

export default class AuthContollers {
    async login (req:Request, res:Response) {
        const {
            email,
            password
        } = req.body
        try{
            const user = await db('auth')
                .where({email})
                    .catch(() => null)

                if(user?.length == 0)
                    return res.status(404).send({err:'O usuario não foi encontrado'})

                if(user){
                 if(!await bcryptjs.compare(password,user[0].password))
                    return res.status(403).send({err:'A senha está errada'})

                    user[0].password = undefined
                const token =  tokenGen(user[0].id)

                res.status(200).send({sucess:"Conectado com sucesso!", user, token})}
        } catch(err) {
            console.log(err)
        }
    }
    async register (req:Request, res:Response) {
        let {email,password,name} = req.body 
        try{
            const user = await db('auth')
                .where({email})
                    .catch(async(e) => null)
                    if(user?.length != 0)
                        return res.status(400).send({err:'O email já está cadastrado!'})

                    password = await bcryptjs.hash(password,10)
                
                    await db("auth").insert({email,password,name});
                    let USERAfterCad = await db('auth')
                    .where({email})

                    const token =  tokenGen(USERAfterCad[0].id)

                    USERAfterCad[0].password = undefined

                    return res.status(200).send({sucess:"O usuario foi cadastrado com sucesso!", user:USERAfterCad[0],token});
        } catch(err){ 
            console.log(err);
        }
    }
}