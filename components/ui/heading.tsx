import { FC } from "react";

const Heading: FC<{ text: string; className?: string }> = (props) => {
    return (
        <h1 className={`text-6xl font-extrabold m-6 ${props.className}`}>
            {props.text}
        </h1>
    );
};
export default Heading;
