function getData(url){
    return new Promise((resolve, reject)=>{
        xhRequest(resolve,reject,url)
    })
}
const xhRequest=(resolve, reject, url)=>{
    const xhr = new XMLHttpRequest();
    xhr.open('Get',url);
    xhr.onreadystatechange = ()=>{
        if(xhr.readyState===4){
            if(xhr.status===200){
                resolve(JSON.parse(xhr.responseText));
            }
            else{
                let errorData;
                try{
                    errorData = JSON.parse(xhr.responseText);
                }catch(e){
                    errorData={
                        status: xhr.status,
                    }
                }
                reject(errorData)
            }
        }
    };
    xhr.send();
}
export {getData}

fetch(url, {
  method: "POST",
  body: JSON.stringify({
    id:1,
    brand:"Toyota",
    model:"Camry",
    engineSize:2.5
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
});
