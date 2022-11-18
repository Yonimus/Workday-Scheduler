$(document).ready(function(){
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"))
});
$(".saveBtn").on("click", function(){
    var text = $(this).siblings(".description").value();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, text);
})
    var hour = $("description")
    hour.each(function(){
        console.log($(this))
        $(this).value(localStorage.getItem($(this).parent().attr("id")));
    })

for( i=8; i<24; i++){
var createBlock = document.createElement('section');
var createTimeSlot = document.createElement('article');
var inputBox = document.createElement('input');
var saveButton = document.createElement('button');

createBlock.appendChild(createTimeSlot);
createBlock.appendChild(inputBox);
createBlock.appendChild(saveButton);
createTimeSlot.classname = ''+[i];
createTimeSlot.setAttribute('','');
inputBox.className = ''+[i];
inputBox.setAttribute('','');
saveButton.className = ''+[i];
saveButton.setAttribute('','');
saveButton.innerHTML='Save';

createTimeSlot.innerHTML= moment().startOf('day').add(i, 'hours').format('h:mm a');

var hourC = i;

var currentdate = moment().hour();
console.log(currentdate + hourC);

if(currentdate > hourC){
    inputBox.style.backgroundColor = 'cyan';
}
var inputStorage = localStorage.getItem('response'+[i]);
inputBox.value = inputStorage
};
var butn8 = document.querySelector(".button8");
    butn8.addEventListener("click", function(){
        var response = document.querySelector(".calendarrow8").value;
        localStorage.setItem("response8", JSON.stringify(response))
    });
