let a = document.getElementsByClassName("option");
let userscore = document.getElementsByClassName("userscore");
let compscore = document.getElementsByClassName("compscore");
let play = document.getElementsByClassName("play");


let newuserscore = 0;
let newcompscore = 0;
let xx;

let result = document.createElement("div");

a[0].onclick = () => {
    console.log("press 1");
    xx = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    console.log("xx is" + xx);
    if (xx === 1) {

        result.innerHTML = "computer choose stone,you have a tie";
        play[0].after(result);
    }

    if (xx === 2) {
        result.innerHTML = "computer choose paper,you loose!!";
        newcompscore = newcompscore + 1;
        compscore[0].innerHTML = newcompscore;
        play[0].after(result);
    }


    if (xx === 3) {
        result.innerHTML = "computer choose scissors,you win!!";
        newuserscore = newuserscore + 1;
        userscore[0].innerHTML = newuserscore;
        play[0].after(result);
    }



}




a[1].onclick = () => {
    console.log("press 2");
    xx = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    console.log("xx is" + xx);
    if (xx === 1) {
        result.innerHTML = "computer choose stone,you win!!";
        newuserscore = newuserscore + 1;
        userscore[0].innerHTML = newuserscore;
        play[0].after(result);
    }

    if (xx === 2) {

        result.innerHTML = "computer choose paper,you have a tie";
        play[0].after(result);
    }


    if (xx === 3) {
        result.innerHTML = "computer choose scissors,you loose!!";
        newcompscore = newcompscore + 1;
        compscore[0].innerHTML = newcompscore;
        play[0].after(result);
    }


}





a[2].onclick = () => {
    console.log("press 3");
    xx = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    console.log("xx is" + xx);
    if (xx === 1) {
        result.innerHTML = "computer choose stone,you loose!!";
        newcompscore = newcompscore + 1;
        compscore[0].innerHTML = newcompscore;
        play[0].after(result);
    }

    if (xx === 2) {
        result.innerHTML = "computer choose paper,you win!!";
        newuserscore = newuserscore + 1;
        userscore[0].innerHTML = newuserscore;
        play[0].after(result);
    }


    if (xx === 3) {

        result.innerHTML = "computer choose scissors,you have a tie";
        play[0].after(result);
    }



}



