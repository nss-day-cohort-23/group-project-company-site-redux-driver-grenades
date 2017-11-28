let classes = [
  {
  name: "Driver's Ed",
  startdate: '12-1-17',
  spots: 15,
  price: 150,
  img: '/images/driversed.jpg',
  
  },
  {
  name: "Learner's Permit",
  startdate: '12-15-17',
  spots: 20,
  price: 79.99,
  img: '/images/lp.jpg',

  },
  {
    name: "Insurance Discount",
    startdate: '1-1-18',
    spots: 33,
    price: 5000000,
    img: '/images/insurance.jpg',
    
  },
  {
    name: "Traffic School",
    startdate: '1-31-18',
    spots: 26,
    price: 3,
    img: '/images/sb.png',
    
  },
  {
    name: "Agressive Driving",
    startdate: '2-7-18',
    spots: 100,
    price: 42,
    img: '/images/agressive.jpg'
    
  }

]
let string = '';

 for(let i=0; i<classes.length; i++){
    classDiv = document.getElementById('classes');  
    string +=`<div class="card"> <img src=${classes[i].img}>
    <div id="textDiv">
    <div class="text" id="name">${classes[i].name}</div>
    <div class="text" id="startdate">Start Date: ${classes[i].startdate}</div>
    <div class="text" id="spots_${[i]}"> Open Spots: ${classes[i].spots}</div>
    <div class="text" id="price"> Price: $${classes[i].price}</div>
    <button id="button_${[i]}">Enroll</button>    
    </div></div>`

    classDiv.innerHTML = string;
    
    
   
 }


function subtract(){
  for (let i = 0; i < classes.length; i++){

let buttonNumber = 'button_' + i;
console.log(buttonNumber, 'this is the conditional')

  document.getElementById(buttonNumber).addEventListener('click',function (){
    console.log(i);
    classes[i].spots --;
    console.log(i, classes[i].spots, buttonNumber, "spots_"+(i) , 'spots in this class');
    document.getElementById("spots_"+i).innerHTML = 'Open Spots:'+ classes[i].spots;
  });
  console.log('at least it got here')
}
}
subtract();
 
