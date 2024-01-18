/*
//document.getElementsByClassName
var res = document.getElementsByClassName ("main1");
console.log(res);
res[1].innerHTML = "Changed the HTML element ";
console.log(res[1].innerHTML);
 */
/* 
//document.getElementsByTagName
var res = document.getElementsByTagName ("div");
console.log(res);
 */


/* //document.querySelector
//For Class
var res = document.querySelector(".main");
console.log(res);
//For ID
//var res1 = document.querySelector("#main");
//console.log(res); */


/* //document.querySelectorAll
var res= document.querySelectorAll(".main");
console.log(res); */


/* //Append and appendChild
var parent = document.createElement("div");
var child1 = document.createElement("p");
child1.innerHTML = "This is child-1";
var child2 = document.createElement("p");
child2.innerHTML = "This is child-2";
//parent.appendChild(child1,child2);
parent.append(child1,child2);
document.body.append(parent);
//document.body.append(parent,child1,child2);
 */

/* //Email
var email_1 = document.createElement("label");
email_1.setAttribute("for","email");
email_1.innerHTML = "Email";
var break_ts = document.createElement("br");
var input =  document.createElement("input");
input.setAttribute("type","email");
input.setAttribute("name"," ")
input.id = "email";
var break_ts_1 = document.createElement("br");
document.body.append(email_1,break_ts,input,break_ts_1);
 */

function form_label_create(ele_name,attr_name_1,attr_name_2,content){
    var ele = document.createElement(ele_name);
    ele.setAttribute(attr_name_1,attr_name_2);
    ele.innerHTML = content;
    return ele;
}
function form_input_create(ele_name,attr_name_1,attr_name_2,attr_name_3){
    var ele = document.createElement(ele_name)
    ele.setAttribute(attr_name_1,attr_name_2);
    ele.id = attr_name_3;
    return ele;
}

function form_break_create(ele_name){
    var ele = document.createElement(ele_name);
    return ele;
}

//First Name
var label_fn = form_label_create("label","for","first_name","First Name");
var break_fn = form_break_create("br");
var input_fn = form_input_create("input","type","text","first_name");
var break_fn2 = form_break_create("br");

//Midle Name
var label_md = form_label_create("label","for","midle_name","Midle Name");
var break_md = form_break_create("br");
var input_md = form_input_create("input","type","text","midle_name");
var break_md2 = form_break_create("br");

//Last Name
var label_ln = form_label_create("label","for","last_name","Last Name");
var break_ln = form_break_create("br");
var input_ln = form_input_create("input","type","text","last_name");
var break_ln2 = form_break_create("br");

//Email
var label_em = form_label_create("label","for","email","Email");
var break_em = form_break_create("br");
var input_em = form_input_create("input","type","email","email");
var break_em2 = form_break_create("br");

//Password
var label_pw = form_label_create("label","for","password","Password");
var break_pw =  form_break_create("br");
var input_pw = form_input_create("input","type","password","password");
var break_pw2 = form_break_create("br");

//Last Name
var label_ph = form_label_create("label","for","phone_num","Phone num");
var break_ph = form_break_create("br");
var input_ph = form_input_create("input","type","tel","phone_num");
var break_ph2 = form_break_create("br");

document.body.append(label_fn,break_fn,input_fn,break_fn2);
document.body.append(label_md,break_md,input_md,break_md2);
document.body.append(label_ln,break_ln,input_ln,break_ln2);
document.body.append(label_em,break_em,input_em,break_em2);
document.body.append(label_pw,break_pw,input_pw,break_pw2);
document.body.append(label_ph,break_ph,input_ph,break_ph2);
