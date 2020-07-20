let ask=(question,yes,no)=>(question==true)?alert("yes,You agreed"):alert("You canceled the execution");
let question=confirm("Do you agree");
ask(question);