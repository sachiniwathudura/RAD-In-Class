export default function Subject(props:{name:string,children:React.ReactNode}) {
    return (
        <>
            <h2>{props.name}</h2>
            <p>{props.children}</p>
        </>

    )
}