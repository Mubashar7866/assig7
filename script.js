// dom call
var dom = document;
console.log(dom);
// 1st question fuction named ctaHandler1();
function ctaHandler1(){
   var userNameInput = dom.getElementById("firstnumber");
   var p = firstnumber.value;
   var userNameInput = dom.getElementById("secondnumber")
   var q = secondnumber.value;
    if(p>q)
    {
        console.log ("max number is:", p);
        var r = dom.getElementById("result");
        r.innerHTML = p;

    }
    else if (q>p){
        console.log ("max number is;" , q);
        var r = dom.getElementById("result");
        r.innerHTML = q ;
    }
}
// 2nd question function named ctaHandler2();
function ctaHandler2(){
 var userNameInput = dom.getElementById("firstnum")
 var first = firstnum.value ;
 var userNameInput = dom.getElementById("secondnum");
 var second = secondnum.value ;
 var userNameInput = dom.getElementById("thirdnum");
 var third = thirdnum.value ;
 if(first > second && first > third){
     console.log("max num is:" , first); 
     var r = dom.getElementById("result2")
     r.innerHTML = first;
 }
 else if (second > first && second > third){
console.log("max num is:" , second)
var r = dom.getElementById("result2")
r.innerHTML = second;
 }

 else{
     console.log("max num is:" , third);
    var r = dom.getElementById("result2");
     r.innerHTML = third;
 }

}
// 3rd check that the number is divisible by 5 && 11

function ctaHandler3(){
  var getElementById = dom.getElementById("special")
  var z = special.value;
  if(z%5 === 0 && z%11 ===0){
      console.log("the number is divisible")
      var r = dom.getElementById("result3")
      r.innerHTML = "the number is divisible"
  }
  else{
      console.log("the number is not divisible")
      var r = dom.getElementById("result3")
      r.innerHTML = "the number is not divible"
  }

}
// 4th check even or odd

function ctaHandler4()
{

    var getElementById = dom.getElementById("evenodd")
    var r = evenodd.value;
    if(r%2 === 0){
        console.log("the number  even" , r );
        var a = dom.getElementById("result4")
        a.innerHTML =   "the number is even" , r 


    }
    else{
        console.log("the number is odd" , r) 
        var a = dom.getElementById("result4")
        a.innerHTML =  "the number is odd" , r


    }
}

// 5th to check leap year or not
 
function ctaHandler5(){
     var getElementById = dom.getElementById("leap")
     var r = leap.value
if(r%100 === 0 && r%400 === 0)
{
    console.log("this is leap year" ,r)
    var a = dom.getElementById("result5")
    a.innerHTML = "this is a leap year"
}
else{
    console.log("this is not leap year" , r)
    var a = dom.getElementById("result5")
    a.innerHTML = "this is not a leap year"
}
}

// 6th chek wovel or consonet
function ctaHandler6(){
 var getElementById = dom.getElementById("vowel")
 var r = vowel.value 
 if (r = a) {
     console.log("the alphabet is vowel")
     var a = dom.getElementById("result6")
     a.innerHTML = "the alphabet is vowel" 
 }
 else if(r =  e){
    console.log("the alphabet is vowel" )
    var a = dom.getElementById("result6")
    a.innerHTML =  "the alphabet is vowel" 
}
else if(r = i ){
    console.log("the alphabet is vowel" )
    var a = dom.getElementById("result6")
    a.innerHTML =  "the alphabet is vowel" 
}
 else if(r = o ){
    console.log("the alphabet is vowel" )
    var a = dom.getElementById("result6")
    a.innerHTML =  "the alphabet is vowel"
}
else if(r = u ){
    console.log("the alphabet is vowel" )
    var a = dom.getElementById("result6")
    a.innerHTML =  "the alphabet is vowel"
}

 else{
     console.log("the alphabet is consonant" )
     var a = dom.getElementById("result6")
      a.innerHTML = r , "the alphabet is consonant"
    }
}


function ctaHandler7(){
    var getElementById = dom.getElementById("typecheck")
    var a = typecheck.value;
    var getElementById = dom.getElementById("result7")
    var b = result7.value;
    if(a === 0){
        console.log("the number is zero" )
        var r = dom.getElementById("result7")
        r.innerHTML = "the number is zero"
    }
   else if(a < 0){
    console.log("the number is negative" )
    var r = dom.getElementById("result7")
    r.innerHTML = "the number is negative"

   }
   else if(a >= 0) {
    console.log("the number is positive" )
    var r = dom.getElementById("result7")
    r.innerHTML = "the number is positive"
      }


}
function ctaHandler8(){
 var userNameInput = dom.getElementById("alpha")
 var char = alpha.value
 var userNameInput = dom.getElementById("result8") 
 var r = result8.value
 if (char = String)
 {
     console.log("you entered an alphabat")
     var r = dom.getElementById("result8")
     r.innerHTML = "you entered an alphabat"
 }
 else {
    console.log("you did not entered an alphabat")
    var r = dom.getElementById("result8")
    r.innerHTML = "you did not entered an alphabat"
 }
}

function ctaHandler9(){
    var userNameInput = dom.getElementById("input")
    var char = input.value
    var userNameInput = dom.getElementById("result8") 
    var r = result8.value
    if(char = String){
        console.log("you entered a alphabet")
        var r = dom.getElementById("result9")
        r.innerHTML = "you entered a alphabet"
    }
     else if( char = integer) {

        console.log("you entered a digit")
        var r = dom.getElementById("result9")
        r.innerHTML = "you entered a digit"
     }
     else{
         
        console.log("you entered a special character")
        var r = dom.getElementById("result9")
        r.innerHTML = "you entered a special character"
     }
}

function ctaHandler10(){
 var userNameInput = dom.getElementById("weekday")
 var day = weekday.value
 var userNameInput = dom.getElementById("result10")
 var r = result10.value
 if (day == 1){
     console.log("monday")
     var r = dom.getElementById("result10")
     r.innerHTML = "monday"
 }
 else if(day == 2){
     console.log("tuesday")
    var r = dom.getElementById("result10")
    r.innerHTML = "tuesday"
    
    }
    else if(day == 3){
        console.log("wednesday")
       var r = dom.getElementById("result10")
       r.innerHTML = "wednesday"
       
       }
       else if(day == 4){
        console.log("thursday")
       var r = dom.getElementById("result10")
       r.innerHTML = "thursday"
       
       }
       else if(day == 5){
        console.log("friday")
       var r = dom.getElementById("result10")
       r.innerHTML = "friday"
       
       }
       else if(day == 6){
        console.log("saturday")
       var r = dom.getElementById("result10")
       r.innerHTML = "saturday"
       
       }
       else if(day == 7){
        console.log("sunday")
       var r = dom.getElementById("result10")
       r.innerHTML = "sunday"
       
       }
}

function ctaHandler11(){
    var userNameInput = dom.getElementById("mnumber")
    var month = mnumber.value
    var userNameInput = dom.getElementById("result11")
    var r = result11.value
    if(month == 1){
        console.log("31")
        var r = dom.getElementById("result11")
        r.innerHTML = "31"
    }
   else if(month == 2){
        console.log("28 or 29")
        var r = dom.getElementById("result11")
        r.innerHTML = "28 or 29"
    }
    else if(month == 3){
        console.log("31")
        var r = dom.getElementById("result11")
        r.innerHTML = "31"
    }
    else if(month == 4){
        console.log("30")
        var r = dom.getElementById("result11")
        r.innerHTML = "30"
    }
    else if(month == 5){
        console.log("31")
        var r = dom.getElementById("result11")
        r.innerHTML = "31"
    }

    else if(month == 6){
        console.log("30")
        var r = dom.getElementById("result11")
        r.innerHTML = "30"
    }
    else if(month == 7){
        console.log("31")
        var r = dom.getElementById("result11")
        r.innerHTML = "31"
    }
    else if(month == 8){
        console.log("31")
        var r = dom.getElementById("result11")
        r.innerHTML = "31"
    }
    else if(month == 9){
        console.log("30")
        var r = dom.getElementById("result11")
        r.innerHTML = "30"
    }
    else if(month == 10){
        console.log("31")
        var r = dom.getElementById("result11")
        r.innerHTML = "31"
    }
    else if(month == 11){
        console.log("30")
        var r = dom.getElementById("result11")
        r.innerHTML = "30"
    }
    else if(month == 12){
        console.log("31")
        var r = dom.getElementById("result11")
        r.innerHTML = "31"
    }

}

function ctaHandler12(){
    var userNameInput = dom.getElementById("pnumber")
    var userNameInput = dom.getElementById("chnumber")
    var userNameInput = dom.getElementById("bnumber")
    var userNameInput = dom.getElementById("mnumber")
    var userNameInput = dom.getElementById("cnumber")
    var obt = parseInt(dom.getElementById)
    var userNameInput = dom.getElementById("result12")
    var r = result12.value
    var obt = parseInt(pnumber.value)  + parseInt(chnumber.value) + parseInt( bnumber.value) + parseInt( mnumber.value)+ parseInt ( cnumber.value)
    console.log(obt)
    var total = 600;
    var p = (obt/total*100)
    if(p>=90){
        console.log("A")
        var r = dom.getElementById("result12")
        r.innerHTML ="A"
    }
    else if(p>=80){
        console.log("B")
        var r = dom.getElementById("result12")
        r.innerHTML = "B"
    }
    else if(p>=70){
        console.log("C")
        var r = dom.getElementById("result12")
        r.innerHTML = "C"
    }

    else if(p>=60){
        console.log("D")
        var r = dom.getElementById("result12")
        r.innerHTML = "D"
    }

    else if(p>=40){
        console.log("E")
        var r = dom.getElementById("result12")
        r.innerHTML = "E"
    }
    else{
        console.log("F")
        var r = dom.getElementById("result12")
        r.innerHTML = "F"
    }


}






















