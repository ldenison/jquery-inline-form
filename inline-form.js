/**
 * JQuery Inline Form
 * This allows you to place an element on a web page that will turn into 
 * a text input when the user clicks it. Includes a submit and cancel
 * button to either submit the form, or return the screen to its previous
 * state, with the element showing and the form hidden. Great for allowing
 * users to edit data anywhere when displaying some data that might already
 * be saved in a database.
 * @author - Luke Denison
 * @date - March 2014
 */
 
(function( $ ) {
 
    $.fn.inlineForm = function(options) {
    	
    	var button = $(this);
    	var settings = $.extend({
    		name: "name",
    		id: null,
    		action: null,
    		method: "post"
    	}, options);
    	
    	//Initialize additional elements for the hidden form
    	var form = $("<form>", {
    		class: "col-xs-3",
    		id: settings.id,
    		action: settings.action,
    		method: settings.method,
    		html: "<button class='btn btn-default' style='border-radius:0px 0px 0px 5px;margin:-1px 0 0 10px;'><i class='glyphicon glyphicon-ok' style='color: green'></i></button>"
    	});
    	var input = $("<input>", {
    		name: settings.name,
    		value: button.text(),
    		class: "form-control",
    		type: "text"
    	});
    	var cancel = $("<span>", {
    		class: "btn btn-default cancel",
    		style: "border-radius:0px 0px 5px 0px; margin:-1px 0 0 -5px;",
    		form: "none",
    		html: "<i class='glyphicon glyphicon-remove' style='color: red'></i>"
    	});
    	//Add the input and cancel buttons to the form
	form.prepend(input);
	form.append(cancel);
    	
    	//Add the form after the editable element
    	$(button).after(form);
    	$(form).hide();
    	
    	//Hide the form when the cancel button is clicked and reset the value of the input
    	$(cancel).click(function () {
    		$(input).val($(button).text());
    		$(form).hide();
    		$(button).show();
    	});
    	
    	//Display the form when the element is clicked
    	$(button).click(function() {
    		$(button).hide();
    		$(form).show();
    	});
    	//Return the button for JQuery chaining
        return this;
    };
}( jQuery ));
