const fetchingData={
    getData: (url)=>{
        return new Promise((resolve, reject)=>{
            const xhr = new XMLHttpRequest();
            xhr.open("GET",url);
            xhr.onreadystatechange = ()=>{
                if(xhr.readyState === 4){
                    if(xhr.status == 200){
                        resolve(JSON.parse(xhr.responseText))
                    }
                    else{
                        let errorData;
                        try{
                            errorData = JSON.parse(xhr.responseText);
                        }
                        catch(e){
                            errorData = {
                                status: xhr.status
                            }
                        }
                        reject(errorData)
                    }
                }
            }
            xhr.send();
        })
    },
    postData: (url, obj)=>{
        return new Promise((resolve, reject)=>{
            const xhr = new XMLHttpRequest();
            xhr.open("POST",url);
            xhr.setRequestHeader('Content-Type','application/json')
            xhr.onreadystatechange = ()=>{
                if(xhr.readyState === 4){
                    if(xhr.status == 200){
                        resolve(JSON.parse(xhr.responseText))
                    }
                    else{
                        let errorData;
                        try{
                            errorData = JSON.parse(xhr.responseText);
                        }
                        catch(e){
                            errorData = {
                                status: xhr.status
                            }
                        }
                        reject(errorData)
                    }
                }
            }
            xhr.send(obj);
        })
    },
    updateData: (url, obj)=>{
        return new Promise((resolve, reject)=>{
            const xhr = new XMLHttpRequest();
            xhr.open("PUT",`${url}/${obj.id}`);
            xhr.setRequestHeader('Content-Type','application/json')
            xhr.onreadystatechange = ()=>{
                if(xhr.readyState === 4){
                    if(xhr.status == 200){
                        resolve(JSON.parse(xhr.responseText))
                    }
                    else{
                        let errorData;
                        try{
                            errorData = JSON.parse(xhr.responseText);
                        }
                        catch(e){
                            errorData = {
                                status: xhr.status
                            }
                        }
                        reject(errorData)
                    }
                }
            }
            xhr.send(obj);
        })
    },
    deleteData: (url, obj)=>{
        return new Promise((resolve,reject)=>{
            const xhr = new XMLHttpRequest();
            xhr.open("DELETE",`${url}/${obj.id}`)
            xhr.onreadystatechange = ()=>{
                if(xhr.readyState === 4){
                    if(xhr.status == 200){
                        resolve(JSON.parse(xhr.responseText))
                    }
                    else{
                        let errorData;
                        try{
                            errorData = JSON.parse(xhr.responseText);
                        }
                        catch(e){
                            errorData = {
                                status: xhr.status
                            }
                        }
                        reject(errorData)
                    }
                }
            }
            xhr.send(obj);
        })
    }
}
export default fetchingData;