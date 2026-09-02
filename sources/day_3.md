useRef()
---------------------------------------------
useRef is a React Hook that lets you keep a value between renders without causing a re-render, and it can also be used to directly access a DOM element.

import {useRef} from 'react'

const inpRef = useRef();
    targeting :
    -----------
 <input type="text" ref={inpRef} />

 inpRef.current.value   => value get 
 inpRef.current = inpRef.current.value

problem is input onChange => every type to rerender the component 

to solve this useRef()

create a useRef variable => targeting input field (ref=variable_name)
holding the all property of element in (useRef)

Optional Chaining :
-------------------------------------------------------------------------
problem is element value is null/ 
 before accessing the value to avoid this so, we can use optional chaining 

let user;
console.log(user?.name);

inpRef.current.focus() => while typing to focus

state la oru value handle pannum poothu at the same time previous value to handle na use useRef.






