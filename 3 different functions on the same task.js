// Code goes here


let question = prompt("Do you agree?", 'Yes');

let ask = (question) ? 
  () => alert("You agree") :
  () => alert("You cancelled")

ask();


/*function ask(question, yes, no) {
  if (confirm(question)) yes()

  else no();
}

ask(
  "Do you agree?",
   function() {
      alert("You agreed");
    },
  function() {
      alert("You cancelled execution!");
    }
);*/

/*function ask(question, yes, no) {
  if (confirm(question)) yes()

  else no();
}

ask(
  "Do you agree?",
   () =>  alert("You agreed"),
   () =>  alert("You cancelled execution!")
    
);*/








