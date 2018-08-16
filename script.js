var totalNum;
createQuestion();

function createQuestion() {
    var PlusMinus = Math.random();
    var maximum = document.querySelector("#range").value


    if (PlusMinus<=0.5) {
        totalNum = Math.floor(Math.random() * maximum) + 1;
        var firstNum = Math.floor(Math.random() * totalNum) + 1;
        var secondNum = totalNum - firstNum;
    } else {
        var firstNum = Math.floor(Math.random() * maximum) + 1;
        var secondNum = Math.floor(Math.random() * firstNum) + 1;
        totalNum = firstNum - secondNum;
    }

    var Sign = (PlusMinus <=0.5) ? " + " : " - ";
    document.querySelector("#question").innerHTML = firstNum + Sign + secondNum;

    var answerBox = document.querySelectorAll(".btn");

    var correctBtn = Math.floor(Math.random() * answerBox.length) + 0;

    for(i = 1; i< answerBox.length+1; i++) {
        (function(){
            if (i==correctBtn+1) {
                answerBox[i-1].innerHTML = totalNum;
            } else {
                var PosNeg = Math.random();
                answerBox[i-1].innerHTML = (PosNeg <=0.5) ? totalNum  + i : totalNum - i;
                if (answerBox[i-1].innerHTML<0) answerBox[i-1].innerHTML = Math.floor(Math.random() * maximum) + 1;
            }
        }(i))
    }
}
var disable = false;
var answerBoxCheck = document.querySelectorAll(".btn");
for(i = 0; i< answerBoxCheck.length; i++) {
    (function(){
        answerBoxCheck[i].onclick = function(evt) {
            if(disable == false) {
                if(evt.target.textContent == totalNum) {
                    document.querySelectorAll("#score li")[0].value++
                    document.querySelectorAll("#score li")[0].innerHTML = "✓: " + document.querySelectorAll("#score li")[0].value;
                    document.querySelector("#cover").classList.add('unhide');
                    document.querySelector("#cover").style.backgroundColor ="#55efc4";
                    document.querySelector("#cover").innerHTML ="✓";
                    disable = true;
                    
                    setTimeout(function(){
                        document.querySelector("#cover").classList.remove('unhide');
                        document.querySelector("#container").classList.add('hide')

                        setTimeout(function(){
                            document.querySelector("#container").classList.remove('hide')
                            createQuestion();
                            disable = false;
                        }, 650)

                    }, 1000);
                } else {
                    document.querySelectorAll("#score li")[1].value++
                    document.querySelectorAll("#score li")[1].innerHTML = "✕: " + document.querySelectorAll("#score li")[1].value;
                    document.querySelector("#cover").classList.add('unhide');
                    document.querySelector("#cover").innerHTML ="✕";
                    document.querySelector("#cover").style.backgroundColor ="#fab1a0";
                    disable = true;
                    
                    setTimeout(function(){
                        document.querySelector("#cover").classList.remove('unhide')
                        document.querySelector("#container").classList.add('hide')

                        setTimeout(function(){
                            document.querySelector("#container").classList.remove('hide')
                            createQuestion();
                            disable = false;
                        }, 700)

                    }, 1000);
                }
            }
        }
    }(i))
}

function reset() {
    createQuestion();
    document.querySelectorAll("#score li")[0].innerHTML = "✓: 0";
    document.querySelectorAll("#score li")[1].innerHTML = "✓: 0";
}