import { FC, PropsWithChildren } from "react";

const Section: FC<PropsWithChildren<{ className?: string }>> = (props) => {
    return (
        <section
            className={`p-12 flex flex-col items-center ${props.className}`}
        >
            {props.children}
        </section>
    );
};
export default Section;
