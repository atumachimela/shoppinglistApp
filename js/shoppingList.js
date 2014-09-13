var id = 1 //unique id for list items
	function addItem(message) {
		alert(message);
    var checkbox = "<td class=\"check\">" + "<input type=\"checkbox\" id=\"item" + id + "\" class=\"box\">" + 
    "<label for=\"item" + id + "\" class=\"check-label\"></label></td>";
 	var content = "<td class=\"content\"><span>" + message + "</span></td>";
	var delIcon = "<td><img src=\"img/delIcon.jpg\" alt=\"checkout\" class=\"checkout\"></td>";
 	//ouputs the items with a delete icon 
    $("tbody").append("<tr>" + checkbox + content + delIcon + "</tr>");
 
    id++;
}
//obtaining customer input 
function getInput() {
	
	var userinput = $("#user_input");
	var input = userinput.val();

	if ((input !== "") && ($.trim(input) !== "")){ //input validation
		addItem(input);
		userinput.val("");


	}
}
 // input reception
 
 $(document).on("keydown",function(e) {
 	if(e.keyCode === 13){
 		getInput();
 	}
 });
 // Toggle delete icon when edit button is clicked
 function editButton() {
    $(".edit").on("click", "span", function() {
        $(".checkout").toggle();
    });
}

 //edit input
 $(document).ready(function(event){
 	editButton();
 	$("tbody").on("click" ,".checkout", function(){
 		$(this).closest("tr").remove();
 	});
 	$("button").on("click" , getInput);
 	$("tbody").on("click" , ".box" , function()
 		{
 			$(this).closest("tr").find("span").toggleClass("checked");
 	});
 });