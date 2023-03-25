import Link from "next/link";
import { FC, PropsWithChildren, useContext } from "react"
import Notification from "../ui/Notification";
import NotificationContext from "@/store/notification-ctx";

const Layout:FC<PropsWithChildren>=(props)=>{
    const notificationCtx=useContext(NotificationContext);
    return (
        <div className="bg-primary-light min-h-screen">
            <header className="lg:px-40 py-6 flex justify-between items-center bg-primary-dark">
                <Link href="/" className="logo">
                    <h1 className="uppercase text-3xl font-extrabold text-gray-200 font-sans">
                        Hitesh&apos; Blog
                    </h1>
                </Link>
                <nav>
                    <ul className="flex space-x-6 text-gray-300">
                        <li>
                            <Link href="/posts">Posts</Link>
                        </li>
                        <li>
                            <Link href="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>{props.children}</main>
            {notificationCtx.notification && (
                <Notification
                    message={notificationCtx.notification.message}
                    status={notificationCtx.notification.status}
                    title={notificationCtx.notification.title}
                />
            )}
        </div>
    );
}
export default Layout