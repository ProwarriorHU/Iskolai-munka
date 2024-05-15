import fetchingData from "../Backend/fetchHelper.mjs";
import { displayDataInTable } from "./src/module/displayData.mjs";
fetchingData.getData("http://localhost:3000/cars")
.then(data=>{
    displayDataInTable(data)
})
fetchingData.postData()
fetchingData.updateData()
fetchingData.deleteData()