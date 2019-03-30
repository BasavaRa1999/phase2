 function submitData(){
  var career=document.querySelector("#career").value;


  var name=document.querySelector("#name").value;
  var mobile=document.querySelector("#mobile").value;
  var email=document.querySelector("#email").value;
  var place=document.querySelector("#place").value;



var ginstitute=document.querySelector("#ginstitute").value;
var gbranch=document.querySelector("#gbranch").value;
var gyear=document.querySelector("#gyear").value;
var gpercentage=document.querySelector("#gpercentage").value;


var iinstitute=document.querySelector("#iinstitute").value;
var ibranch=document.querySelector("#ibranch").value;
var iyear=document.querySelector("#iyear").value;
var ipercentage=document.querySelector("#ipercentage").value;


var sinstitute=document.querySelector("#sinstitute").value;
var syear=document.querySelector("#syear").value;
var sbranch=document.querySelector("#sbranch").value;
var spercentage=document.querySelector("#spercentage").value;


var skills=document.querySelector("#skills").value;


var idb=window.indexedDB || window.mozIndexedDB || window.msIndexedDB || window.webkitIndexedDB ;

     if(!idb in window)
     {
  console.log("indexedDB is not supported");
     }
//IndexedDB creation
var request;
var store;
var open=idb.open("storeData");

console.log("IndexedDB is created");

open.onupgradeneeded=function(e){
request=e.target.result;
store=request.createObjectStore("formdata",{keyPath:"id",autoIncrement:true});
console.log("store is created");
}
open.onerror=function(error){
  console.log("error is occured");
 }

open.onsuccess=function(e)
{
  request=e.target.result;
  var transaction=request.transaction("formdata","readwrite");
  store=transaction.objectStore("formdata");
  store.put({
    career:career,
    name :name,
    mobile:mobile,
    email:email,
    place:place,
    education:[
      {
        institute:ginstitute,
        branch:gbranch,
        year:gyear,
        percentage:gpercentage
      },
      {
        institute:iinstitute,
        branch:ibranch,
        year:iyear,
        percentage:ipercentage
      },
    {
      institute:sinstitute,
      branch:sbranch,
      year:syear,
      percentage:spercentage
    }
  ],
  skills:skills
})
}
window.open("index.html");
}
