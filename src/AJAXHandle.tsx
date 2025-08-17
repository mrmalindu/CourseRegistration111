export const AJAXHandle = () =>{
    const getData = () =>{
        //handle AJAX
        const xhr = new XMLHttpRequest();
    }
    
    
    return(
        <>
        <h1>this is AJAX handle page</h1>
        <br />
        <button onClick={getData}>Get data</button>
        </>
    )
}