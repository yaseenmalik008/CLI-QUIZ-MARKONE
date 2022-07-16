var readlineSync = require("readline-sync")
score = 0
 var userName = readlineSync.question("WHAT IS YOUR NAME? ")
console.log(`Welcome ${userName}`)
var yourAnswer = readlineSync.question("  DO YOU WANT TO PLAY HTML AND CSS QUIZ GAME? ")
if (yourAnswer.toUpperCase() === "yes".toUpperCase()){
  console.log(`${yourAnswer} YOUR WELCOME`)

  function play (questions,answer){
    var userAnswer = readlineSync.question(questions);
    if (userAnswer.toUpperCase() === answer.toUpperCase()){
      console.log("RIGHT!")
      score = score + 1
      console.log(`YOUR SCORE IS : ${score}`)
    }else {
      console.log("WRONG!")
      score = score - 1 
      console.log(`YOUR SCORE IS : ${score}`)
    }
    console.log("-----------")
  }
var questions = [{
  question : `1.WHAT DOES CSS STAND FOR? 
A : CREATIVE STYLE SHEETS
B : COMPUTER STYLE SHEETS
C : CASCADING STYLE SHEETS
D : COLORFUL STYLE SHEETS `,
  answer : "C"
},{
  question : `2.WHICH HTML TAG IS USED TO DEFINE AN INTERNAL STYLE SHEET? 
A : <STYLE>
B : <CSS>
C : <SCRIPT> `,
  answer : "A"
},{
    question : `3.WHICH HTML ATTRIBUTE IS USED TO DEFINE INLINE STYLES? 
A : STYLE
B : STYLES
C : FONT
D : CLASS `,
  answer : "A"
},{
    question : `4.WHAT IS THE CORRECT CSS SYNTAX? 
A : BODY:COLOR=BLACK;
B : {BODY;COLOR:BLACK;}
C : BODY{COLOR;BLACK;}
D : {BODY:COLOR=BLACK;} `,
  answer : "C"
},{
   question : `5.HOW DO YOU INSERT A COMMENT IN CSS FILE? 
A : /*THIS IS A COMMENT*/
B : //THIS IS A COMMENT
C : //THIS IS A COMMENT//
D : 'THIS IS A COMMENT `,
  answer : "A"
},{
  question : `6.WHICH PROPERTY IS UESD TO CHANGE THE BACKGROUND COLOR? 
A : BACKGROUND-COLOR
B : BGCOLOR
C : COLOR `,
  answer : "A"
},{
question : `7.WHIH CSS PROPERTY IS USED TO CHANGE THE TEXT COLOR OF AN ELEMENT? 
A : TEXT-COLOR
B : FGCOLOR
C : COLOR `,
  answer : "C"
},{
  question : `8.WHICH CSS PROPERTY CONTROLS THE TEXT SIZE? 
A : TEXT-SIZE
B : FONT-SIZE
C : FONT-STYLE
D ; TEXT-SIZE `,
  answer : "B"
},{
  question : `9.WHICH PROPERTY IS UESD TO CHANGE THE FONT OF AN ELEMENT? 
A : FONT-FAMILY
B : FONT-STYLE
C : FONT-WEIGHT `,
  answer : "A"
},{
  question : `10.HOW DO YOU MAKE THE TEXT BOLD? 
A : FONT-WEIGHT:BOLD;
B : STYLE:BOLD;
C : FONT:BOLD; `,
  answer : "A"
},{
  question : `11.WHICH PROPERTY IS USED TO CHANGE THE LEFT MARGIN OF AN ELEMENT? 
A : MARGIN-LEFT
B : PADDING-LEFT
C : INDENT`,
  answer : "A"
},{
  question : `12.HOW DO YOU SELECT AN ELEMENT WITH ID 'DEMO'? 
A : #DEMO
B : DEMO
C : *DEMO
D : .DEMO `,
  answer : "A"
},{
  question : `13.HOW DO YOU SELECT ELEMENTS WITH CLASS NAME 'TEST'? 
A : #TEST
B : .TEST
C : TEST
D : *TEST `,
  answer : "B"
},{
  question : `14.HOW DO YOU SELECT ALL P ELEMENTS INSIDE A DIV ELEMENT? 
A : DIV + P
B : DIV P
C : DIV.P `,
  answer : "B"
},{
  question : `15.WHAT IS THE DEFAULT VALUE OF THE POSITION PROPERTY? 
A : FIXED
B : ABSOLUTE
C : STATIC
D : RELATIVE`,
  answer : "C"
}
]
for (i = 0; i<questions.length ; i++){
  var currentQuestion = questions[i];
  play (currentQuestion.question, currentQuestion.answer)
}
console.log(`YAY YOU SCORED: ${score}`)


}
else if(yourAnswer==='no') {
  console.log(`OK! THANKS FOR YOUR TIME.`)

}else if(yourAnswer=== ''){
  console.log(`please  enter something `)
}


