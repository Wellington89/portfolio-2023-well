/*----------------------Função muda cor background---------------------*/ 
document.querySelector("#submit").addEventListener("click", () => {

    var hex_numbers = ["0","1","2","3","4","5","6","7","8","9","A", "B", "C", "D", "E", "F"];

    var hexcode1 = "";

    var hexcode2 = "";

    var random_index = 0;

    

    for(let i = 0; i < 6;i++){

      random_index = Math.floor(Math.random() * hex_numbers.length);

      hexcode1 += hex_numbers[random_index];

      random_index = Math.floor(Math.random() * hex_numbers.length);

        hexcode2 += hex_numbers[random_index];

    }

  

    document.body.style.background = `linear-gradient(to right, #${hexcode1}, #${hexcode2})`;

document.getElementById("output").innerHTML = `background: linear-gradient(to right, #${hexcode1}, #${hexcode2});`

  });
/*----------------------Função muda cor background---------------------*/ 

  /*----------------------Função relógio do menu----------------------*/ 
  let clock = () => {

    let date = new Date();
  
    let hrs = date.getHours();
  
    let mins = date.getMinutes();
  
    let secs = date.getSeconds();
  
    let period = "AM";
  
    if (hrs == 0) {
  
      hrs = 12;
  
    } else if (hrs >= 12) {
  
      hrs = hrs - 12;
  
      period = "PM";
  
    }
  
    hrs = hrs < 10 ? "0" + hrs : hrs;
  
    mins = mins < 10 ? "0" + mins : mins;
  
    secs = secs < 10 ? "0" + secs : secs;
  
    let time = `${hrs}:${mins}:${secs}:${period}`;
  
    document.getElementById("clock").innerText = time;
  
    setTimeout(clock, 1000);
  
  };
  
  clock();
  /*----------------------Função relógio do menu----------------------*/ 