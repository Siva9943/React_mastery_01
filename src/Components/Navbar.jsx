

function Navbar(props){
    // console.log(props)
    let {d:[name,std,location,{name:p}],age:test}=props;
    // console.log(p,"test")
    let a={a1:'apple',a2:'banana'}
    let g={...a,a3:'graps'}  // copy of a var data ,
    g.a1="test"
    console.log(a)
    return(
        <>
        <h3>Navbar</h3>
        </>
    )
}
export default Navbar;

