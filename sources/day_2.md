Hooks :
----------------------------------------------
React Hooks are special functions that let you use React features such as state, lifecycle behavior, context, and refs inside functional components.

class based components - change functional components 

UseState():
------------------------------------------
useState is a React Hook used to store and update data (state) in a component.

import { useState } from "react"

const [state,setState]=useState(initial_value)


useEffect():
--------------------------------------------
useEffect is a React Hook used to run some code after a component renders.

It is mainly used for side effects, such as:

Calling an API
Fetching data
Setting a timer
Adding event listeners
Updating the document title
Running code when state/props change

import {useEffect} from "react"

useEffect(()=>{
    //code 
},[dependencies])

first time web page load to affected the useEffect .
[] => array is empty only one time to run .
other wise the component reder na not working 

[count]

