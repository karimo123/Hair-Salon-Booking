const form = document.getElementById('appointmentForm')
const chosenService = form.elements['typeOfHaircut']
const chosenExpert = form.elements['nameOfExpert']
const chosenDate = form.elements['date']
const chosenTime = form.elements['time']
const fullName = form.elements['name']
const email = form.elements['email']
let price = 0;
let imgUrl = "";

const renderArea = document.querySelector("#renderArea")



function bookAppointment(event) {
  event.preventDefault()
  if(chosenService.value === "Youth Haircut (Age under 18) $15" ||chosenService.value === "Fade $15"){
    price = 15
  } else if(chosenService.value === "Adult Haircut (Age 18-64) $25"){
    price = 25
  } else if (chosenService.value === "Senior Haircut (Age over 64) $17" ||chosenService.value === "Student Haircut $17" ){
    price = 17
  } else if (chosenService.value === "Buzzcut $8" ){
    price = 8
  } else if (chosenService.value === "Haircut for very long hair $30" ){
    price = 30
  } else if (chosenService.value === "Beard Lineup $10" ){
    price = 10
  }


  console.log(chosenExpert.value)
  if (chosenExpert.value === "William"){
    imgUrl = "./assets/William.png"
  } else if(chosenExpert.value === "Michelle"){
    imgUrl = "./assets/Womanbarber.jpg"
  }else if(chosenExpert.value === "John"){
    imgUrl = "./assets/Beardbarber.jpg"
  }else if(chosenExpert.value === "Joe"){
    imgUrl = "./assets/OwnerBarber.webp"
  }
  renderAppointment();
}

function renderAppointment() {


  renderArea.innerHTML =
    `<div class="m-3">
  <div class="d-flex flex-column justify-content-center align-items-center ">
      <h3>Confirmation</h3>
      <p class="mt-2">Thank you for booking ${fullName.value}</p>
      <p ">Email: ${email.value}</p>
      <p>Your booking is confirmed on <span style="font-weight: bold;">June ${chosenDate.value}, at ${chosenTime.value},</span> for a <span
              style="font-weight: bold;">${chosenService.value} with ${chosenExpert.value}</span></p>
      <p>Location:<span style="font-weight: bold;"> 1475 Leeves Avenue, Ottawa, Ontario</span> </p>
      <p>Total Price: <span style="font-weight: bold;">$ ${price}</span></p>
      <img style=" border-radius: 20px;box-shadow: 0 5px 40px 0 rgba(204, 24, 24, 0.45); overflow: hidden; " class="img-fluid" src=${imgUrl} alt="">
  </div>

</div>`
}