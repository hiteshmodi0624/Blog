import { FormEvent, useContext, useState } from "react"
import Section from "../layouts/section"
import Button from "../ui/button"
import Heading from "../ui/heading"
import InputElement from "../ui/inputElement"
import NotificationContext from "@/store/notification-ctx"
import axios, { AxiosError } from "axios"

const ContactForm=()=>{
    const [email,setEmail]=useState<{value:string,isInvalid:boolean}>({value:"",isInvalid:true})
    const [name,setName]=useState<{value:string,isInvalid:boolean}>({value:"",isInvalid:true})
    const [message,setMessage]=useState<{value:string,isInvalid:boolean}>({value:"",isInvalid:true})
    const notificationCtx=useContext(NotificationContext);
    const onSubmitHandler=async(event:FormEvent)=>{
        event.preventDefault();
        notificationCtx.showNotification({message:"Please Enter Valid Input",status:"error",title:"Invalid Input"})
        if(email.isInvalid||name.isInvalid||message.isInvalid)
            return;
        notificationCtx.showNotification({message:"Sending your Message",status:"pending",title:"Sending..."})
        try {
            const result=await axios.post('/api/contact',{
                email:email.value,name:name.value,message:message.value
            })
            if(result.status===201){
                notificationCtx.showNotification({message:"You message was sent Successfully!",status:"success",title:"Saved"})
                setEmail({value:"",isInvalid:false});
                setName({value:"",isInvalid:false});
                setMessage({value:"",isInvalid:false});
            }
            else{
                throw new Error(result.data.message);
            }
        } catch (error:AxiosError|any) {
            notificationCtx.showNotification({
                message:"Could not send your message. Please try again!",
                status: "error",
                title: error.response.data.message || "Error!",
            });
        }
    }
    return (
        <form className="flex justify-center my-6 mx-2" onSubmit={onSubmitHandler}>
            <Section className="lg:w-1/2 bg-light-text-2 py-4 rounded-md px-4">
                <Heading text="How can I help you?" />
                <div className="lg:grid grid-cols-2 gap-2 w-full">
                    <InputElement
                        id="email"
                        name="Your Email"
                        setInputValue={setEmail}
                        value={email.value}
                    />
                    <InputElement
                        id="name"
                        name="Your Name"
                        setInputValue={setName}
                        value={name.value}
                    />
                </div>
                <InputElement
                    id="message"
                    name="Your Message"
                    textbox={true}
                    setInputValue={setMessage}
                    value={message.value}
                />
                <div className="flex justify-end w-full pt-4">
                    <Button title="Send Message" />
                </div>
            </Section>
        </form>
    )
}
export default ContactForm