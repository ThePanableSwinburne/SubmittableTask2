// Import stylesheets
import './style.css';
import { Cookie } from './models/Cookie';
import { Colour } from './models/Colour';

//test

// Create a array/list of cookies named cookies

let cookies: Cookie[] = [];
const selector = document.getElementById('cookieSelector') as HTMLSelectElement;
init();
// create an init() function
// init() will create two cookies called Cookie1 and Cookie2, and add them to the array of cookies
function init() {
  //TODO: add code here
  // create the two cookies
  // add them to the array
  // add them as options in the select/dropdown (cookieSelector) element

  let changeColorButton: HTMLButtonElement = document.getElementById(
    'changeColour-btn'
  ) as HTMLButtonElement;
  let addCookieButton: HTMLButtonElement = document.getElementById(
    'addChocolateChip-btn'
  ) as HTMLButtonElement;

  changeColorButton.addEventListener('click', changeColour);
  addCookieButton.addEventListener('click', addChocolateChip);

  cookies.push(new Cookie('Cookie1'), new Cookie('Cookie2'));
  cookies[1].colour = Colour.black;

  // initialise the cookieColour-inp to the colour of the first cookie created
  const input = document.getElementById('cookieColour-inp') as HTMLInputElement;
  input.value = cookies[0].colour.toString();

  let opt1 = document.createElement('option');
  let opt2 = document.createElement('option');
  opt1.text = cookies[0].name;
  opt2.text = cookies[1].name;
  selector.add(opt1);
  selector.add(opt2);
  updateDisplay();
}

//TODO: this function needs to go through the list of cookies and draw them to cookiesDiv
// create the cookies as divs with the class name of cookie - see style.css
// number of chocolatechips needs to be shown on the cookie
function drawCookies() {
  let cookieDiv = document.getElementById('cookiesDiv') as HTMLDivElement;
  while (cookieDiv.firstChild) {
    cookieDiv.removeChild(cookieDiv.firstChild);
  }
  for (let i = 0; i < cookies.length; i++) {
    let newDiv = document.createElement('div') as HTMLDivElement;
    newDiv.classList.add('cookie');
    newDiv.style.backgroundColor = Colour[cookies[i].colour].toString();
    let chocChipNum: string = cookies[i].chocolateChipNum.toString();
    let cookieText = document.createTextNode(chocChipNum);
    newDiv.appendChild(cookieText);
    cookieDiv.appendChild(newDiv);
  }
}

//TODO: this fuction needs to be triggered by button changeColour-btn
// upon pressing the button it should change the colour of the cookie selected in the dropdown to the colour typed in the input element (cookieColour-inp)
function changeColour() {
  let option: number = selector.selectedIndex;
  let selectedCookie: Cookie = cookies[option];
  let inputBox: HTMLInputElement = document.getElementById(
    'cookieColour-inp'
  ) as HTMLInputElement;
  selectedCookie.colour = Colour[inputBox.value.toLowerCase()];
  console.log(Colour[cookies[1].colour].toString());
  updateDisplay();
}

//TODO: this fuction needs to be triggered by button addChocolateChip-btn
// upon pressing the button it should add a chocolate chip to cookies selected from the dropdown
function addChocolateChip() {
  let option: number = selector.selectedIndex;
  let selectedCookie: Cookie = cookies[option];
  selectedCookie.chocolateChipNum++;
  updateDisplay();
}

function updateDisplay() {
  drawCookies();
}
