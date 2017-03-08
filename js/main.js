$(document).ready(function(){

	var doc = new jsPDF();
	var specialElementHandlers = {
	    '#editor': function (element, renderer) {
	        return true;
	    }
	};

	$('#submit').click(function () {
	    doc.fromHTML($('.maincontent').html(), 35, 5, {
	        'width': 150,
	            'elementHandlers': specialElementHandlers
	    });
	    doc.save('sample-file.pdf');
	});
});