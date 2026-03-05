function saveData(){

let data = {

name: document.getElementById("name").value,
phone: document.getElementById("phone").value,
address: document.getElementById("address").value,
lat: document.getElementById("lat").value,
lon: document.getElementById("lon").value,
area: document.getElementById("area").value,
cane: document.getElementById("cane").value,
yield: document.getElementById("yield").value,
suggest: document.getElementById("suggest").value

};

fetch("save.php",{

method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(data)

})
.then(res=>res.json())
.then(res=>{
alert("บันทึกข้อมูลสำเร็จ")
})

}