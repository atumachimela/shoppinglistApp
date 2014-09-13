var id = 1;
var AppController = {
	onReady : function ()
	{	
		$("button").click (AppController.getInput);
		$("tbody").on("click" , ".box" , AppController.togchecking);
		$("tbody").on("click" , ".checkout" , AppController.removeitem);
		$(".edit").on("click" , "span" , AppController.inputtoggle);
	},
	togchecking : function()
	{
		$(this).closest("tr").find("span").toggleClass("checked");
	},
	// method that enables users to delete an item on the list.
	removeitem : function(){
		$(this).closest("tr").remove();
	},
	// method that accepts user inputs and validates it .
	getInput : function()
	{	
		var userinput = $("#user_input");
		var input = userinput.val();
		if ((input !=="") && ($.trim(input) !== ""))
			{
				AppController.addItem(input);
				userinput.val("");
	        }
	},
	// method appends the checkbox , message and delete icon to the output .
	addItem : function(message)
	{
		var checkbox = "<td class=\"check\">" + "<input type=\"checkbox\" id=\"item" + id + "\" class=\"box\">" + 
		"<label for=\"item" + id + "\" class=\"check-label\"></label></td>";
		var content = "<td class=\"content\"><span>" + message + "</span></td>";
		var delIcon = "<td><img src=\"img/delIcon.jpg\" alt=\"checkout\" class=\"checkout\"></td>";
		$("tbody").append("<tr>" + checkbox + content + delIcon + "</tr>");
		id++;
	},
	// method for enterkey enabling.
	enableentrekey : function()
	{
		$("#user_input").on("keydown",function(e) 
		{
			if(e.keyCode === 13)
			{
				Appcontroller.getInput();
			}
		});
	}
}

$(document).ready(AppController.onReady);

 
