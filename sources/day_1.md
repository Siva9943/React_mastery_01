Javascript Library - React 
Dom - Virtual Dom (changes are to be affected )
Babel - Complier Jsx - Js
Compare Virtual Dom and Original Dom - level by level check to modified particular elements(node) only 
package.json - react project complete like settings , react version , dependencies , dev-dependencies .

vite.config.js  - Building tool (use for create react application)
package.lock.json - Go to base level dependencies 

Project creation:
-----------------------------------------
npm create vite@latest my-app
cd my-app
npm install




jsx - javascript xml (include html to javascript missings)

export / import - to use function export/import 

export default - import to use any userdefine name (like 'test,demo')

multiable component to export use like = > export {app , nav} ;
import {app , nav} from file/path; also use alias name "nav as n"

more than 1 tage return => must use parent tage , <> </> , <div></div>

rfce - create instance functional component 

Props:
-------------------------------------------------------------------------------
share the data between the components ,
normal => name="siva"
            props (receive this data in object format)
            props.key => extact
object > data={
    name:"siva",
    std:"12th",
    info:{
        name:"ajith"
    }
}
<Nav data={data}/>

receive props => destucture this 
 let {name,std,info:{name:p}}=props.data
 console(p) // ajith

let data={
    name:"siva",
    std:"12th",
    location:"chennai",
    info:{
      name:"ajith"
    }
  }
  let d=[1,2,4,data]

  let [a,b,c,{name,std,location,info:{name:g}}]=props.d
    console.log(g,"test")

let {d:[name,std,location,{name:p}],age:test}=props;

Spread Operator :
--------------------------------------------------------------------------
Take the values from an array/object and spread them out

let a=['apple','banana']
let g=[...a,'graps']






    




 

