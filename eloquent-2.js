//Looping a triangle
var hash = "#";

for (var i = 1; i <= 7; i++){
  console.log(hash);
  hash += "#"
}

//FizzBuzz
for (var i = 1; i <= 100; i++){

 if (i % 3 === 0){

    if (i % 5 === 0) {
    console.log("FizzBuzz");
    }

   else {
   console.log("Fizz");
   }
  }

   else if (i % 5 === 0){
  	console.log("Buzz");
  }
  else {
   console.log(i);
  }
}

//Chess board
var size = 8;
var spaceHash = "";

for (var i = 0; i < size; i++){

  for (var j = 0; j < size; j++){

  if ([i] % 2 === 0){
    if ([j] % 2 === 0){
   spaceHash += " ";
    	}
    else {
     spaceHash += "#";
    	}
    }

    else {
    if ([j] % 2 === 0){
     spaceHash += "#";
    	}
      else {
        spaceHash += " ";
      }
    }
  }  
  spaceHash += "\n";
}
console.log(spaceHash);
