
document.getElementById('tableBody').innerHTML="wait you will get data";

async function getval(){
    await fetch("https://run.mocky.io/v3/9b184f9d-bf48-4467-9d8f-137ea0eba817")
    .then((response) => {                   //promise- to fect resource has properetise and method
        // console.log(response);           //get,put,post,delete
        return response.json();             //json()-return in JSON format
    })
    .then((data) => {
        // console.log(data);                      //return data from api-json
        let keys = Object.values(data);             //give all value in object
        // console.log(keys);
        document.getElementById("title").innerHTML=keys[0];
        data1 = keys[1];
        // console.log(keys[1]);               //give all the data at index 1
        let tabledata = "";
        data1.map((values) => {
             tabledata += `<tr><td>${values.name}</td><td>${values.office}</td><td>${values.position}</td><td>${values.salary}</td></tr> `;
            //  console.log(tabledata); 
        });
        document.getElementById("tableBody").innerHTML = tabledata; 
    })
    .catch((err) => { 
        console.log(err); 
    });
}