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

 for(i=0; i<classes.length; i++){
    classDiv = document.getElementById('classes');  
    string +=`<p> <img src=${classes[i].img}></p>
    <p>${classes[i].name}</p>
    <p>${classes[i].startdate}</p>
    <p>${classes[i].spots}</p>
    <p> $${classes[i].price}</p>`
    

    classDiv.innerHTML = string;

 }