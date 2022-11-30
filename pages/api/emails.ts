import { NextApiRequest,NextApiResponse } from "next";
import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient();
export default async (req: NextApiRequest, res: NextApiResponse) => {
    if(req.method != 'POST') {
        return res.status(405).json({message: 'Method not allowed'})
    }

    const emailData = JSON.parse(req.body);
    const savedEmails = await prisma.contact.create({
        data: emailData
    })

    res.json(savedEmails)
}

