//While Loop//
function count_To_Ten() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Counting_to_Ten").innerHTML = Digit;
}
//End While Loop//

//For Loop//
const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];//Defining  the const in cars

let text2 = "";//defining the let Text2
for (let i = 0; i < cars.length; i++) {//using for 
    text2 += cars[i] + "<br>";
}

document.getElementById("for_loop").innerHTML = text2;//Putting the results into HTML with the element "For_Loop" and id
//End For Loop//

//function Array//
function cat_pics() {
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is" +
    Cat_Picture[2] + ".";
}
//End Function Array//

//Let Keyword//
var X = 10;
//here x is 10

{
 var X = 2;
//here x is 2
}

//here x is 2
document.getElementById("Let_Keywords").innerHTML = X;
//End Let Keyword//