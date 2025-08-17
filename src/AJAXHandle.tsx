export const AJAXHandle = () =>{
    const getData = () =>{
        //handle AJAX
        const xhr = new XMLHttpRequest();
         xhr.open("GET","https://jsonplaceholder.typicode.com/posts",true);

        xhr.onload = ()=>{
          if(xhr.status === 200){
              console.log(xhr.responseText)
          }
        };
        xhr.onerror = () =>{
          console.log("Request Failed")
        };
        xhr.send();

        
    }
        const getDataFetch = () =>{
            fetch("https://jsonplaceholder.typicode.com/posts")
            .then(data =>{data.json()})
            .catch(err=>console.error(err))
        }
    
    
    return(
        <>
        <h1>this is AJAX handle page</h1>
        <br />
        <button onClick={getData}>Get data</button>
        <button onClick={getDataFetch}>Get data</button>
        </>
    )
}