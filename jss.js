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
		$(".fclass").append('<option>select</option>');
		$("main section:nth-child("+sub+") div h2 ").each(function(value){
			value=value+1;
			var sinput =$(this).text().replace("X","");
			$(".fclass").append('<option value="'+value+'">'+sinput+'</option>');

		});

	});

	$(".d").submit(function(e){
		e.preventDefault();
		var label=$(".la").val();
		var name=$(".n").text();
		var placeholder=$(".p").val();
		var clas=$(".cl").val();
		var value=$(".v").val();
		var option=$(".o").val();		
		var sub = $(".sclass option:selected").val();
		var abc =$(".form-input option:selected").text();
		var efg =$(".fclass option:selected").val();
		var aaa =parseInt(efg)+1;
		var res = option.split(",");		
		if(abc=='RADIO'){
			$(res).each(function(ky){				
				$("main section:nth-child("+sub+") div:nth-child("+aaa+")").append('<p><label> '+res[ky]+'  </label><input type="'+abc+'" name="'+name+'" placeholder="'+placeholder+'"   class="'+clas+'" value="'+value+'"  </input> <button  onclick=myFunction(this)>X</button> </p>');
			})
		}
		else if(abc=='CHECKBOX'){			
			$(res).each(function(k){
				$("main section:nth-child("+sub+") div:nth-child("+aaa+")").append('<p><label> '+res[k]+'  </label><input type="'+abc+'" name="'+name+'" placeholder="'+placeholder+'"   class="'+clas+'" value="'+value+'" option="'+option+'"  </input> <button  onclick=myFunction(this)>X</button> </p>');
			})
		}
		else if(abc=='SELECT'){			
			var x = $('<p><label> '+label+' </label></p>');			
			var y = $('<select class="'+clas+'"><option>select</option></select>').appendTo(x);			
			$(res).each(function(v){
				$(y).append("<option> "+res[v]+" </option>");
			});
			$("main section:nth-child("+sub+") div:nth-child("+aaa+")").append(x);
		}
		else if(abc=='TEXTAREA'){
			var xt = $('<p><label> '+label+' </label>  <textarea  name="'+name+'"   placeholder="'+placeholder+'"   class="'+clas+'" value="'+value+'" option="'+option+'"  >'+value+'</textarea>  </p>');			
			$("main section:nth-child("+sub+") div:nth-child("+aaa+")").append(xt);
		}
		
		else $("main section:nth-child("+sub+") div:nth-child("+aaa+")").append('<p><label> '+label+' </label><input type="'+abc+'" name="'+name+'" placeholder="'+placeholder+'"   class="'+clas+'" value="'+value+'" option="'+option+'"  </input> <button  onclick=myFunction(this)>X</button> </p>');
		if ($('.dis').is(':checked'))
		{
			$( 'main section:nth-child('+sub+') div:nth-child('+aaa+') p:last-child :input' ).prop( 'disabled', true );
			
		}
		if ($('.read').is(':checked'))
		{
			$( 'main section:nth-child('+sub+') div:nth-child('+aaa+') p:last-child :input' ).prop( 'readonly', true );
			
		}
		if ($('.req').is(':checked'))
		{
			$( 'main section:nth-child('+sub+') div:nth-child('+aaa+') p:last-child :input' ).attr( 'required', true );
			
		}


		

		
		
		$(".d").trigger("reset");
	

	});
		

});

function myFunction(t){
  	$(t).parent().remove();
  };

