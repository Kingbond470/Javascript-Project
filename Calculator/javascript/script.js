$(document).ready(function () {
    "use strict";
    
    // show the sidebar
    $('#menu').click(function () {
        $('.sidebar').addClass('sidebar-show');
    });
    // hide the sidebar
    $('#hide').click(function () {
        $('.sidebar').removeClass('sidebar-show');
    });
    
    // change theme
    // default
    $('#theme-purple').click(function () {
        $('#main').css({"background": "linear-gradient(to bottom right, #FC3366, #3A5EFF"});
        $('.op').css({"color": "lightslategray"});
        $('.num-button').css({"color": "purple"});
    });
    // red
    $('#theme-red').click(function () {
        $('#main').css({"background": "linear-gradient(to bottom right, red, yellow"});
        $('.op').css({"color": "orange"});
        $('.num-button').css({"color": "red"});
    });
    // blue
    $('#theme-blue').click(function () {
        $('#main').css({"background": "linear-gradient(to bottom right, blue, cyan"});
        $('.op').css({"color": "dodgerblue"});
        $('.num-button').css({"color": "blue"});
    });
    // blue green
    $('#theme-bluegreen').click(function () {
        $('#main').css({"background": "linear-gradient(to bottom, #5433ff, #20bdff, #a5ffaa)"});
        $('.op').css({"color": "lightseagreen"});
        $('.num-button').css({"color": "bluegreen"});
    });
    // green
    $('#theme-green').click(function () {
        $('#main').css({"background": "linear-gradient(to bottom right, mediumseagreen, springgreen"});
        $('.op').css({"color": "limegreen"});
        $('.num-button').css({"color": "green"});
    });
    // black
    $('#theme-black').click(function () {
        $('#main').css({"background": "linear-gradient(to bottom right, black, #434343"});
        $('.op').css({"color": "#434343"});
        $('.num-button').css({"color": "black"});
    });
});

// manages scaling
let siteWidth = 480;
let scale = screen.width/siteWidth

document.querySelector('meta[name="viewport"]').setAttribute('content', 'width='+siteWidth+', initial-scale='+scale+'');

var dec = false;  // tracks if decimal has been entered
var operator = false;  // tracks if an operator has been entered 
var ansFound = false;  // tracks if ans has been calculated
var accuracy = 2;  // determines the number of decimal places to show
var ans = 0;  // the result

// automatically scrolls to the rightmost side of the result window
function autoScroll() {
    document.getElementById("result").scrollLeft = document.getElementById("result").scrollWidth;
}

// changes the number of decimal places to show
function changePrecision(val) {
    accuracy = val;
}

// insert a value to the result window
function insert(value) {
    // if last pressed button was equals
    if (ansFound) {
        // only allow operators
        if (value == '+' || value == '−' || value == '*' || value == '/') {
            operator = true;
            document.getElementById("result").innerHTML += value;
            autoScroll();
            dec = false;
            ansFound = false;
            return;
        } else {
            return;
        }
    }
    // allow only one decimal point per number
    if (value == '.') {
        if (dec || document.getElementById("result").innerHTML== '') {
            return;
        } else {
            dec = true; 
            document.getElementById("result").innerHTML += value;
        }
    // allow only one operator to be on the result window for every two numbers
    } else if (value == '+' || value == '−' || value == '*' || value == '/') {
        if (operator || document.getElementById("result").innerHTML== '') {
            return;
        } else {
            operator = true;
            document.getElementById("result").innerHTML += value;
            dec = false;
        }
    } else {
        document.getElementById("result").innerHTML += value;
    }
    
    autoScroll();
}

// removes the last character
function backspace() {
    let string = document.getElementById("result").innerHTML + '';
    let lastChar = string.substr(string.length - 1);
    
    if (string) {
        if (lastChar == '.') {
            // allow decimal if the decimal point is deleted
            dec = false;
        } else if (lastChar == '+' || lastChar == '−' || lastChar == '*' || lastChar == '/') {
            // allow a operator if any one of them is deleted
            operator = false;
        }
        
        document.getElementById("result").innerHTML = string.substr(0, string.length - 1);
        
        // reset the calculator if backspace clears the result window
        if (document.getElementById("result").innerHTML == "") {
            c();
        }
    }
}

// resets the calculator
function c() {
    dec = false;
    operator = false;
    ansFound = false;
    ans = 0;
    document.getElementById("result").innerHTML = "";
}

// evaluates the answer using the string in the result window
function findAns() {
    let str = document.getElementById("result").innerHTML + '';
    str = str.replace('−', '-'); // change MINUS SIGN “−” U+2212 with HYPHEN-MINUS, “-”, U+002D 
    
    if (str) {
        ans = eval(str);
    }
    
    document.getElementById("result").innerHTML = parseFloat(ans).toFixed(accuracy);
    autoScroll();
    
    ansFound = true;
}
