(function( $ ) {
 
    $.fn.inlineForm = function(options) {
    	
    	var button = $(this);
    	
    	var settings = $.extend({
    		name: "name",
    		id: null,
    		action: null,
    		method: "post"
    	}, options);
    	
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
    	
		form.prepend(input);
		form.append(cancel);
    	
    	$(this).after(form);
    	$(form).hide();
    	var cancel = $(form).find(".cancel");
    	
    	$(cancel).click(function () {
    		$(input).val($(button).text());
    		$(form).hide();
    		$(button).show();
    	});
    	
    	$(button).click(function() {
    		$(this).hide();
    		$(form).show();
    	});
        return this;
    };
}( jQuery ));