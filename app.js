const response = document.getElementById("response");
const title = document.getElementById("h1-title");

// styles of the main title
window.addEventListener("DOMContentLoaded", greet);
function greet() {
    title.style.color = "#7b68ee";
    title.style.textShadow = "-10px -10px 20px ";  
    }

// Font size of the answer
window.addEventListener("DOMContentLoaded", stylerespon);
function stylerespon(){
    response.style.fontSize = "25px"
}

//calculate your final grade allowing you to know whether or not you win the subject
function CalculateFinal(){
    var note1 = document.getElementById('number1').value;
    var note2 = document.getElementById('number2').value;
    var note3 = document.getElementById('number3').value;

    var pro = (parseFloat(note1*(30/100))+parseFloat(note2*(30/100))+parseFloat(note3*(40/100)));

    var FinalRounding = pro.toFixed(1);
        if (pro > 4.5) {
            response.textContent = "Su nota final es" +" "+FinalRounding+" "+ "Es considerado Excelente.";
            
        }  else if (pro >= 3.5 && pro <= 4.5)  {
            response.textContent = "Su nota final es" +" "+FinalRounding+" "+ "Es considerado como Bueno.";
        } else if (pro >= 2 && pro <= 3.4) {
            response.textContent = "Su nota final es " +" "+FinalRounding+" "+ " A perdido la materia pero puede Recuperar.";
        } else{
            response.textContent = "Su nota final es" +" "+FinalRounding+" "+ "A perdido  la materia y deberá Repetirla.";
        }
}

