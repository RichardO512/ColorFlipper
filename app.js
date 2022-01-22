const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

// get the btn id from the html
// remember that use a variable name that have the 
// same name from the html so you can't get confuse
const btn = document.getElementById("btn");
// the querySelector used for selecting one, single,
// or the first element which is the content of the span tag
// 
const color = document.querySelector(".color");

// the code below are like the code to the top
// it also change the background color but it will not change
// the text 
// const btn = document.querySelector("#btn");
// const color = document.getElementsByClassName("color");

btn.addEventListener("click", function () {

    const randomNumber = getRandomNumber();
    console.log(randomNumber);

    // the code below change or set or get the body tag
    // so everytime the developer chose or pick a random number
    // the body will be stylized because im using the
    // style. which means i want to style some specific content
    // and the backgroundColor mean's i want the 
    // backgroundColor change
    // the colors[] is the array rom the top
    // the randomNumber is the variable that contains function
    // of a random number so if a random number generate
    // it will go to the colos[] array so it will look like this
    // colors[1];
    // so the style.backgroundColor will get the value of the
    // index 1
    document.body.style.backgroundColor = colors[randomNumber];
    // the textContent change or return or set or get a text content
    // so if the code below remove it will not change the
    // text from the right
    color.textContent = colors[randomNumber];
});

const getRandomNumber = () => {
    // will round up or round down
    // return Math.floor(Math.random() * colors.length);

    // youu can also use the trunc() so it remove the decimal point
    return Math.trunc(Math.random() * colors.length);
}