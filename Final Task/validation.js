var empList=[];
var empId=[];

let checkeid=(id,iderror,idval,alltrue)=>{
    if(id==""){
        iderror.innerHTML = "Please enter id";
        idval=false;
    }else if(!(id.match(/[0-9]+/))||(id.match(/[a-z]+/))){
        iderror.innerHTML = "Please correct id";
        idval=false;
    } else if(!(Math.sign(id) === 1)){
        iderror.innerHTML = "Please correct id";
        idval=false;
    }else if(idval){ 
        iderror.innerHTML = "";
        alltrue.push(1);
    }
}
let checkname=(name,nameerror,nameval,alltrue)=>{
    if(name==""){
        nameerror.innerHTML = "Please enter name";
        idvnamevalal=false;
    }else if(!(name.match(/[a-z]+/))||(name.match(/[0-9]+/))){
        nameerror.innerHTML = "Please correct name";
        nameval=false;
    }else if(nameval){ 
        nameerror.innerHTML = "";
        alltrue.push(1);
    }
}
let checkage=(age,ageerror,ageval,alltrue)=>{
    if(age==""){
        ageerror.innerHTML = "Please enter age";
        ageval=false;
    }else if(!(age.match(/[0-9]+/))||(age.match(/[a-z]+/))){
        ageerror.innerHTML = "Please correct age";
        ageval=false;
    }
    else if(!(Math.sign(age) === 1)){
        ageerror.innerHTML = "Please correct age";
        ageval=false;
    }
    else if(!(age>=19 && age<=60)){
        ageerror.innerHTML = "Please in between 19 to 60";
        ageval=false;
    }else if(ageval){ 
        ageerror.innerHTML = "";
        alltrue.push(1);
    }
}
let checkgender=(genderindex,gendererror,genderval,alltrue)=>{
    if (genderindex == '-1' ) {
        gendererror.innerHTML = "Please select gender";
        genderval=false;
    }else if(genderval)
    {
      gendererror.innerHTML = "";
      alltrue.push(1);
    //   console.log(alltrue.length);
    }
}
let insertEmp=(id,name,age,gender,iderror)=>{
    let isThere = empId.some((value)=>value==id);
    // console.log(!(isThere));
    if(isThere)
    {
        iderror.innerHTML="Please use another ID";
    }
    else{
        empId.push(id);
        // console.log(empId); 
        // iderror.innerHTML="you can use";
        var Node = function() {
                this.id=Number(id),
                this.name=name,
                this.age=Number(age),
                this.gender=gender
            }
        empList.push(new Node());
        document.getElementById('addEmpForm').reset(); 
        displayEmpDetail();
        // for(var ele in empList)
        //     {
        //         console.log("inseted: ",empList[ele]);
        //     }
        // document.getElementById("finalerror").innerHTML="Employee Successfully added";
    }
}
function displayEmpDetail(){
    var html="";
    if(empList.length==0)
    {
        html+="<tr colspan='4'><h3>There is no Employee</h3></tr>"
    }
    for (var i = 0; i < empList.length; i++) {
        html+="<tr>";
        html+="<td data-label='ID'>"+empList[i].id+"</td>";
        html+="<td data-label='Name'>"+empList[i].name+"</td>";
        html+="<td data-label='Age'>"+empList[i].age+"</td>";
        html+="<td data-label='Gender'>"+empList[i].gender+"</td>";
        html+="<td data-label='Action'>"+"<input type='button' value='Delete' class='btn btn-danger btn-delete' onclick=deleteEmp("+empList[i].id +")></td>";
        html+="</tr>";
    }
    document.getElementById("tdody").innerHTML = html;
    document.getElementById("count").innerHTML = empList.length;
}
function deleteEmp(id){
    // console.log("id for delete: ",id);
    for(let i=0;i<empList.length;i++)
    {
        if(empList[i].id==id)
        {
            empList.splice(i, 1); 
        }
    }
    displayEmpDetail();
    // for (var key in empList) {
    //     console.log("after update",empList[key]);
    // }
}
//main function
function validate() {
    //all html form element 
    var id = document.getElementById("id").value;
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var gender = document.getElementById("gender");
    var genderindex =gender.options[gender.selectedIndex].value;
    //all html error element
    var iderror= document.getElementById("iderror");
    var nameerror= document.getElementById("nameerror");
    var ageerror= document.getElementById("ageerror");
    var gendererror= document.getElementById("gendererror");
    //boolean value=check each field validation 
    var idval=true,nameval=true,ageval=true,genderval=true,alltrue=[];
    //calling all validation function
    checkeid(id,iderror,idval,alltrue);
    checkname(name,nameerror,nameval,alltrue);
    checkage(age,ageerror,ageval,alltrue);
    checkgender(genderindex,gendererror,genderval,alltrue);
    // push emp detail to object
    if(alltrue.length>=4){
        insertEmp(id,name.toLowerCase(),age,genderindex,iderror);
    }
}
