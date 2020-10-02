//event data for each time-block
var events = JSON.parse(localStorage.getItem("allEvents")) ||["","","","","","","","",""];
var hours = [900,1000,1100,1200,1300,1400,1500,1600,1700];


//update the #currentDay paragraph w/ today's date , fullDay, date, year
$("#currentDay").text(moment().format("MMMM Do[, ] YYYY"));


//update background-color of textarea based on current hour #9-desctiption
function updateColors(){
    //needs to compare the current hour, using military time for simplicity
    var currentHour = parseInt(moment().format("hh00")) ;
    //cycle through the time-blocks
    for(var i=0; i<hours.length; i++){
        //we in the future
         if(hours[i]>currentHour)
         {
            $("#"+hours[i]).addClass("future");
         }
         else if(hours[i]==currentHour){
            $("#"+hours[i]).addClass("present");
         }
         else{
            $("#"+hours[i]).addClass("past");
         }
    }
}

updateColors();
function updateEvents(){
   for(var i=0; i<events.length;i++){
      var text = events[i];
      $("#"+hours[i]).val(text);
   }
}
//need to add even listener for save buttons. 
// then target that button's textarea class 
// save that textarea into array.

updateEvents();

$("button").on("click",function(){
   var btnID = $(this).attr("id");
   var textID = btnID.replace("-Btn","");
   //save to events array w/ index of 
   var eventsIndex = hours.indexOf(parseInt(textID));
   events[eventsIndex] = $("#"+textID).val();
   localStorage.setItem("allEvents",JSON.stringify(events));
});
