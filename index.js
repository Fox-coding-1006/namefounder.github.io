let fullname = window.prompt("Enter fullname : ");

let firstname;
let lastname;

// lastname = fullname.slice(window.prompt("where is your last name"));
// console.log(lastname);
 
document.getElementById("btn").onclick = function(){

    let fn = window.prompt("Enter the number where the first name ends : ");
    fno = fullname.slice(0,fn);
    document.getElementById("lbl").innerHTML = "It is " + fno +" isnt it";
}
document.getElementById("btnl").onclick = function(){
    let ln = window.prompt("Enter where the last name starts");
    lno = fullname.slice(ln);
    document.getElementById("lbll").innerHTML = "It is" + lno + " isnt it";
}