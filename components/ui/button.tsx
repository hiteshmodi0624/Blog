import { FC } from "react"

const Button:FC<{title:string}>=(props)=>{
    return (
        <button className="py-1 px-4 bg-purple-900 text-slate-100 hover:bg-purple-800 
                            active:translate-y-px rounded-md text-lg font-light"
                            type="submit"
        >
            {props.title}
        </button>
    );
}
export default Button