(function ($) {
    "use strict";
    $.widget("sui.uiPlugin", {
        
        _create: function () {

            var self = this,
                html = '';
           
                html += '<div data-prev="" data-state="on" class="switch">';
                html += '<span class="slider round"></span>';
                html += '</div>';
                self.element.append(html);
            	self.events();
        },	


        events: function () {
            
            var self = this,
                html = '';
			
			function onChange() { 
				var thisState = self.element.find(this).attr('data-state');
				var thisPrev = self.element.find(this).attr('data-prev');
			
				if (thisState == 'on' && thisPrev == '') {
					self.element.find(this).attr("data-prev", thisState);
					self.element.find(this).attr("data-state", "Intermediate");
				
					console.log('Toggler Intermediate')
				};
				if (thisState == 'Intermediate' && thisPrev == 'on') {
					self.element.find(this).attr("data-prev", '');
					self.element.find(this).attr("data-state", "off");
					console.log('Toggler off')
				};
				if (thisState == 'Intermediate' && thisPrev == 'off') {
					self.element.find(this).attr("data-prev", '');
					self.element.find(this).attr("data-state", "on");
					console.log('Toggler on')
				};
				if (thisState == 'off' && thisPrev == '') {
					self.element.find(this).attr("data-prev", thisState);
					self.element.find(this).attr("data-state", "Intermediate");
				
					console.log('Toggler Intermediate')
				};
			} 
			
            self.element.find('.switch').click(onChange);
            
        }

    });

})(jQuery);


