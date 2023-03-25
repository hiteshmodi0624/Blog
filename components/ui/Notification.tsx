import { FC, useContext } from "react";
import NotificationContext from "@/store/notification-ctx";
import ReactDOM from "react-dom";

const Notification:FC<{title:string,message:string,status:string}>=(props)=>{
    const notificationCtx = useContext(NotificationContext);

    const { title, message, status } = props;

    let statusClasses = "";

    if (status === "success") {
        statusClasses = "bg-green-800";
    }

    if (status === "error") {
        statusClasses = "bg-red-800";
    }

    if (status === "pending") {
        statusClasses = "bg-blue-800";
    }

    return ReactDOM.createPortal((
        <div
            className={
                `fixed bottom-0 left-0 h-20 w-full flex justify-between items-center text-white py-2 px-[10%] ${statusClasses}`
            }
            onClick={notificationCtx.hideNotification}
        >
            <h2 className="m-0 text-lg color-white">{title}</h2>
            <p>{message}</p>
        </div>
    ),document.getElementById('notification')!);
}

export default Notification;
