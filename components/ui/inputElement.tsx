import { ChangeEvent, Dispatch, FC, SetStateAction, useState } from "react";
import ValidateEmail from "@/helpers/validators";
const InputElement: FC<{
    name: string;
    id: string;
    textbox?: boolean;
    setInputValue: Dispatch<SetStateAction<{value:string,isInvalid:boolean}>>;
    value: string;
}> = (props) => {
    const [isInvalid,setInvalid]=useState<boolean>(false);
    const onChangeHandler = (event: ChangeEvent<{ value: string }>) => {
        const value=event.currentTarget.value;
        if(props.id==='email'){
            setInvalid(!ValidateEmail(value))
        }
        else if(props.id==='message'){
            setInvalid(value.trim().length<10);
        }
        else {
            setInvalid(value.trim().length<3);
        }
        props.setInputValue({value,isInvalid});
    };
    return (
        <div className="w-full flex flex-col my-2">
            <label htmlFor={props.id} className="font-bold text-xl">
                {props.name}
            </label>
            {props.textbox ? (
                <textarea
                    id={props.id}
                    name={props.id}
                    value={props.value}
                    onChange={onChangeHandler}
                    className={`bg-slate-50 h-32 p-2 ${isInvalid&&" border-red-600 border-2"} `}
                />
            ) : (
                <input
                    id={props.id}
                    name={props.id}
                    value={props.value}
                    onChange={onChangeHandler}
                    className={`bg-slate-50 p-2 ${isInvalid&&" border-red-600 border-2"} `}
                />
            )}
        </div>
    );
};
export default InputElement;
