useMemo:
----------------------------------------------
useMemo is a React Hook used to remember (cache) the result of a calculation between renders.


problem : 
run slow in changes to rerender all component .
Avoid doing an expensive calculation again when its required values haven't changed

const result = useMemo(() => {
    return someCalculation(value);
}, [value]);

useMemo = > return a value 
remain the previous value 

