import { FC } from "react";

const SubHeading: FC<{ text: string; className?: string }> = (props) => {
    return (
        <h1 className={`text-4xl font-bold m-6 ${props.className}`}>
            {props.text}
        </h1>
    );
};
export default SubHeading;
