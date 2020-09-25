$(document).ready(function(){
	$("#btn2").click(function(){
		var HeadingInput= $("#intext").val();
	    console.log(HeadingInput)
	    $("main").append('<section><h1> '+HeadingInput+'<button  onclick=myFunction(this)>X</button>  </h1></section>');
	    $("#sub_heading").append('<div><h2> '+HeadingInput+'  </h2></div>');
	});

});

function myFunction(t){
  	$(t).parent().remove();
  };


