function saveData(){

let name = document.getElementById("name").value;

fetch("save.php",{
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify({
        name:name
    })
})
.then(res=>res.text())
.then(data=>{
    console.log(data);
});

}