import { dbConnect } from "@/helpers/db-util";
import type { NextApiRequest, NextApiResponse } from "next";
import Message from "@/modals/message";
import ValidateEmail from "@/helpers/validators";
type Data = {
    message: string;
};

const handler = async(req: NextApiRequest, res: NextApiResponse<Data>) => {
    if(req.method==='POST'){
        const { email, name, message }:{email:string,name:string,message:string} = req.body;
        console.log(email,name,message)
        if(ValidateEmail(email)===false)
            res.status(403).json({ message: "Please enter valid email" });
        if(name.trim().length<3)
            res.status(403).json({ message: "Please enter a name of atlease 2 characters" });
        if(message.trim().length<10)
            res.status(403).json({ message: "Please enter a message of atleast 10 characters" });
        await dbConnect();
        const newMessage=new Message({email,name,message})
        await newMessage.save()
        res.status(201).json({ message: "Message Saved" });
    }
};
export default handler