let counter=document.getElementById("count")
let ckt=0
function increment(){
  ckt=ckt+1
  counter.innerHTML=ckt;
}
function save(){
  let curr=counter.innerHTML;
  alert(curr);
}
