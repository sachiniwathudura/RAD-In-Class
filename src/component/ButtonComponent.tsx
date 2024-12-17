//     export default function SmallButtonComponent(props:{name:string}){
//     return (
//         <>
//             <button>{props.name}</button>
//         </>
//
//     )
// }



    // export default function SmallButtonComponent(props:{children:React.ReactNode}) {
    // return (
    //     <>
    //         <button>{props.children}</button>
    //     </>
    //
    // )
//}
// alert to click button
// export default function SmallButtonComponent() {
//     const handleClick =()=>{
//         alert('Click Button!');
//     }
//
//     return (
//         <>
//             <button onClick={handleClick}>Click Me</button>
//         </>
//
//     )
// }

// // alert to click button
// export default function SmallButtonComponent(props:{children:React.ReactNode,onSelect:any}) {
//
//     return (
//         <>
//             <button onClick ={() =>{props.onSelect(props.children)}}>{props.children}</button>
//         </>
//
//     )
// }

//

// alert to click button
//
// export default function SmallButtonComponent(props:{children:React.ReactNode,onSelect:any}) {
//     return (
//            <button onClick={()=>(props.onSelect(props.children))}>{props.children}</button>
//     );
// }


//task 05

export default function ButtonComponent(props:any) {
    let  value = props.count;
    if (props.children === 'Add'){
        value = value + 1;
    }else
        value = value - 1;
    return (
     <button onClick={() =>{props.onClick(value)}}>{props.children}</button>
    );
}