function ask(question,yes,no){
    if(confirm(question)) yes()
    else no();
}
ask(
    "Do u agree?",
    () => { alert("You agreed."); },
    () => { alert("You canceled the execution."); }
);
