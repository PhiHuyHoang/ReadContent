document.addEventListener('DOMContentLoaded', function(){
var button = document.getElementById('button');
button.addEventListener('click',function(){
    var string = document.getElementById('inputBox').value.trim();
    var array = string.split("");
    var result = [];
    var chr = '';
    array.forEach(element => {
        chr = String.fromCharCode(element.charCodeAt()+5);
        result.push(chr);
    });
    var answer = result.join("");
    //const answer = ('Hi ' + name + ', Now is ' + new Date().toLocaleDateString());
    var div = document.createElement('div');
    div.innerText = answer;
    document.body.appendChild(div);
    function modifyDOM() {
        //You can play with your DOM here or check URL against your regex
        console.log('Tab script:');
        console.log(document.body);
        return document.body.innerHTML;
    }

    //We have permission to access the activeTab, so we can call chrome.tabs.executeScript:
    chrome.tabs.executeScript({
        code: '(' + modifyDOM + ')();' //argument here is a string but function.toString() returns function's code
    }, (results) => {
        //Here we have just the innerHTML and not DOM structure
        console.log('Popup script:')
        console.log(results[0]);
    });
},false);

//

var button1 = document.getElementById('button1');
button1.addEventListener('click',function(){
    var string1 = document.getElementById('inputBox1').value.trim();
    var array1 = string1.split("");
    var result1 = [];
    var char1 = '';
    array1.forEach(element => {
        chr1 = String.fromCharCode(element.charCodeAt()-5);
        result1.push(chr1);
    });
    var answer1 = result1.join("");
    //const answer = ('Hi ' + name + ', Now is ' + new Date().toLocaleDateString());
    var div1 = document.createElement('div1');
    div1.innerText = answer1;
    document.body.appendChild(div1);
},false);
},false);