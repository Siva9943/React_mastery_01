import { useState, useEffect, useRef } from "react";

export function Homes() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");

    const inpRef = useRef();

    useEffect(() => {
        console.log("test useEffect");
    }, []);

    const display = () => {
        setText(inpRef.current.value);
    };

    const [input,setInput] = useState("")

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>
                {count}
            </button>

            <h1>
                useRef:
                <input type="text" ref={inpRef} />
            </h1>

            <p>{text}  , {inpRef.current?.value} : Hii</p>  {/* optional chaining before accessing value  */}

            <button onClick={display}>
                Submit
            </button>



            <h4>Event</h4>
            <input type="text" value={input} onChange={(event)=> setInput(event.target.value)} />
        </div>
    );
}