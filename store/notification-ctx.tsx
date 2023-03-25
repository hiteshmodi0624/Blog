import { FC, PropsWithChildren, createContext, useEffect, useState } from "react";

interface notificationInterface{
    title:string,
    message:string,
    status:string
}
interface ContextType{
    notification:notificationInterface|null,
    showNotification:(notificationData:notificationInterface)=>void,
    hideNotification:()=>void
}
const NotificationContext=createContext<ContextType>({
    notification:null,
    showNotification:(notificationData:notificationInterface)=>{},
    hideNotification:()=>{}
});

export default NotificationContext;

export const NotificationComponentProvider:FC<PropsWithChildren>=(props)=>{
    const [ActiveNotification,setActiveNotification]=useState<notificationInterface|null>(null)
    useEffect(()=>{
        if(ActiveNotification&&ActiveNotification.status!=="pending"){
            const timer=setTimeout(()=>{
                hideNotificationHandler()
            },3000)
            return ()=>{
                clearTimeout(timer);
            }
        }
    },[ActiveNotification])

    const showNotificationHandler=(notificationData:notificationInterface)=>{
        setActiveNotification(notificationData);
    }
    const hideNotificationHandler=()=>{
        setActiveNotification(null);
    }
    const context = {
        notification:ActiveNotification,
        showNotification:showNotificationHandler,
        hideNotification:hideNotificationHandler
    }
    return <NotificationContext.Provider value={context}>
        {props.children}
    </NotificationContext.Provider>
}