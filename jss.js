$(document).ready(function(){
	$(".a").submit(function(e){
		e.preventDefault();
		var HeadingInput= $(".form-control").val();
	    $("main").append('<section><h1> '+HeadingInput+'<button  onclick=myFunction(this)>X</button>  </h1></section>');
	    $(".subclass option").remove();
	    $(".sclass option").remove();
	    $(".subclass ").append('<option> select </option>');
	    $(".sclass").append('<option > select </option>');
	     $("main section h1").each(function(key){
			key=key+1;
			var Head_Input=$(this).text().replace("X","")
			
	 	 	$(".subclass ").append('<option value="'+key+'">'+Head_Input+'</option>');
	 		$(".sclass").append('<option value="'+key+'">'+Head_Input+'</option>');
	 	
	 	
	     });
	    $("form").trigger("reset");
	});

	$(".b").submit(function(e){
		e.preventDefault();
		var input = $(".subclass option:selected").val();
		var Subheadinginput = $(".subtext").val();
		$("main section:nth-child("+input+")").append('<div><h2>  '+Subheadinginput+' <button onclick=myFunction(this)>X</button> </h2></div>');
		$(".b").trigger("reset");
	});
	
	$(".sclass").change(function(){
		var sub = $(".sclass option:selected").val();
		$(".fclass option").remove()
		$("main section:nth-child("+sub+") div  ").each(function(value){
			value=value+1;
			var sinput =$(this).text().replace("X","");
			$(".fclass").append('<option value="'+value+'">'+sinput+'</option>');
			
		});
		
	});

	$(".d").submit(function(e){
		console.log('cssdddddddddddddddddd')
		e.preventDefault();
		var label=$(".l").val();
		var name=$(".n").val();
		var placeholder=$(".p").val();
		var clas=$(".cl").val();
		var value=$(".v").val();
		var option=$(".o").val();
		
		var sub = $(".sclass option:selected").val();

		var abc =$(".form-input option:selected").text();
		var efg =$(".fclass option:selected").val();
		var aaa =parseInt(efg)+1;		
		$("main section:nth-child("+sub+") div:nth-child("+aaa+")").append('<p><label> '+label+' </label><input type="'+abc+'" name="'+name+'" placeholder="'+placeholder+'"   class="'+clas+'" value="'+value+'" option="'+option+'"  </input> <button  onclick=myFunction(this)>X</button> </p>');
		
	});
		$(".d").trigger("reset");

});

function myFunction(t){
  	$(t).parent().remove();
  };

