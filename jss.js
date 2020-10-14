$(document).ready(function () {
	var arr = [];
	var data = JSON.parse(localStorage.getItem('arr'));
	$(data).each(function (ke, vl) {
		$("main").append('<section><h1>' + vl.title + '<button  onclick=myFunction(this)>X</button>  </h1></section>');
		$(".subclass ").append('<option value="' + (ke + 1) + '">' + vl.title + '</option>');
		$(".sclass").append('<option value="' + (ke + 1) + '">' + vl.title + '</option>');
		
		$(vl.subhe).each(function (keyy, vle) {

			$("main section:nth-child(" + (ke + 1) + ")").append('<div><h2>  ' + vle.title + ' <button onclick=removeSub(this)>X</button> </h2></div>');

			$(vle.form).each(function (keey, vlle) {
				console.log('------------------------');
				console.log(vlle);

				if (vlle.input == 'SELECT') {
					var xa = $('<p><label> ' + vlle.label + ' </label></p>');
					console.log(xa)
					var ya = $('<select class="' + vlle.clas + '"disabled="'+ vlle.dis+'" required="'+vlle.req+'" readonly="'+vlle.read+'"> <option>select</option> ' + vlle.option.split(',').map((opt) => { return `<option>${opt}</option>`; }) + '</select> <button onclick=myFunction(this)>X</button>').appendTo(xa);
					console.log(ya)
					$("main section:nth-child(" + (ke + 1) + ") div:nth-child(" + (keyy + 2) + ")").append(xa);
				}

				else if (vlle.input == 'TEXTAREA'){
					var at = $('<p><label> ' + vlle.label + ' </label>  <textarea  name="' + vlle.name + '"   placeholder="' + vlle.placeholder + '"   class="' + vlle.clas + '" value="' + vlle.value + '" option="' + vlle.option + '" disabled="'+ vlle.dis+'" required="'+vlle.req+'" readonly="'+vlle.read+'" >' + vlle.value + '</textarea>  <button onclick=myFunction(this)>X</button> </p>');
					$("main section:nth-child(" + (ke+1) + ") div:nth-child(" + (keey+2) + ")").append(at);
				} 
				else {

					$("main section:nth-child(" + (ke + 1) + ") div:nth-child(" + (keyy + 2) + ")").append('<p><label> ' + vlle.label + ' </label><input type="' + vlle.input + '" name="' + vlle.name + ' " placeholder="' + vlle.placeholder + '"   class="' + vlle.clas + '" value="' + vlle.value + '" option="' + vlle.option + '" disabled="'+ vlle.dis+'" readonly="'+vlle.read+'" required="'+vlle.req+'">  </input> <button  onclick=myFunction(this)>X</button> </p>');
				}


			})


		})

	});


	$(".a").submit(function (e) {
		e.preventDefault();
		var HeadingInput = $(".form-control").val();
		$("main").append('<section><h1> ' + HeadingInput + '<button  onclick=myFunction(this)>X</button>  </h1></section>');
		$(".subclass option").remove();
		$(".sclass option").remove();
		$(".subclass ").append('<option> select </option>');
		$(".sclass").append('<option > select </option>');
		$("main section h1").each(function (key) {
			key = key + 1;
			var Head_Input = $(this).text().replace("X", "")

			$(".subclass ").append('<option value="' + key + '">' + Head_Input + '</option>');
			$(".sclass").append('<option value="' + key + '">' + Head_Input + '</option>');
		});
		arr.push({ 'title': HeadingInput, 'subhe': [] })
		localStorage.setItem('arr', JSON.stringify(arr));

		$("form").trigger("reset");
	});

	$(".b").submit(function (e) {
		e.preventDefault();
		var input = $(".subclass option:selected").val();
		var Subheadinginput = $(".subtext").val();
		$("main section:nth-child(" + input + ")").append('<div><h2>  ' + Subheadinginput + ' <button onclick=myFunction(this)>X</button> </h2></div>');

		arr[input - 1].subhe.push({ 'title': Subheadinginput, 'form': [] })
		
		localStorage.setItem('arr', JSON.stringify(arr));

		$(".b").trigger("reset");
	});

	$(".sclass").change(function () {
		var sub = $(".sclass option:selected").val();

		$(".fclass option").remove()
		$(".fclass").append('<option>select</option>');
		$("main section:nth-child(" + sub + ") div h2 ").each(function (value) {
			value = value + 1;
			var sinput = $(this).text().replace("X", "");
			$(".fclass").append('<option value="' + value + '">' + sinput + '</option>');

		});

	});

	$(".d").submit(function (e) {
		e.preventDefault();
		var label = $(".la").val();
		var name = $(".n").text();
		var placeholder = $(".p").val();
		var clas = $(".cl").val();
		var value = $(".v").val();
		var option = $(".o").val();
		var thrdform = $(".input_typee").val();

		var subv = $(".sclass option:selected").val();
		var abc = $(".form-input option:selected").text();

		var efg = $(".fclass option:selected").val();

		var aaa = parseInt(efg) + 1;
		var res = option.split(",");

		var dis = false;
		var read = false;
		var req = false;

		if ($('.dis').is(':checked')) {
			dis = true;
			$('main section:nth-child(' + subv + ') div:nth-child(' + aaa + ') p:last-child :input').attr('disabled','disabled');

		}
		if ($('.read').is(':checked')) {
			read = true;
			$('main section:nth-child(' + subv + ') div:nth-child(' + aaa + ') p:last-child :input').attr('readonly','readonly');

		}
		if ($('.req').is(':checked')) {
			req = true;
			$('main section:nth-child(' + subv + ') div:nth-child(' + aaa + ') p:last-child :input').attr('required','required');
		}

		if (abc == 'RADIO') {
			$(res).each(function (ky) {
				$("main section:nth-child(" + subv + ") div:nth-child(" + aaa + ")").append('<p><label> ' + res[ky] + '  </label><input type="' + abc + '" name="' + name + '" placeholder="' + placeholder + '"   class="' + clas + '" value="' + value + '" disabled="'+ dis+'" required="'+req+'" readonly="'+read+'"</input> <button  onclick=myFunction(this)>X</button> </p>');
				arr[subv - 1].subhe[efg - 1].form.push({ 'dis': dis, 'read': read, 'req': req, 'input': "radio", 'label': res[ky], 'name': name, 'placeholder': placeholder, 'clas': clas, 'value': value, 'option': option })
			})

			localStorage.setItem('arr', JSON.stringify(arr));
		}

		else if (abc == 'CHECKBOX') {
			$(res).each(function (k) {
				$("main section:nth-child(" + subv + ") div:nth-child(" + aaa + ")").append('<p><label> ' + res[k] + '  </label><input type="' + abc + '" name="' + name + '" placeholder="' + placeholder + '"   class="' + clas + '" value="' + value + '" option="' + option + '" disabled="'+ dis+'" required="'+req+'" readonly="'+read+'" </input> <button  onclick=myFunction(this)>X</button> </p>');
				arr[subv - 1].subhe[efg - 1].form.push({ 'dis': dis, 'read': read, 'req': req, 'input': "checkbox", 'label': res[k], 'name': name, 'placeholder': placeholder, 'clas': clas, 'value': value, 'option': option })
			})

			localStorage.setItem('arr', JSON.stringify(arr));
		}
		else if (abc == 'SELECT') {
			var x = $('<p><label> ' + label + ' </label></p>');
			var y = $('<select class="' + clas + '" disabled="'+ dis+'" required="'+req+'" readonly="'+read+'"><option>select</option></select> <button onclick=myFunction(this)>X</button>').appendTo(x);
			$(res).each(function (v) {
				$(y).append("<option> " + res[v] + " </option>");
			});
			$("main section:nth-child(" + subv + ") div:nth-child(" + aaa + ")").append(x);
			arr[subv - 1].subhe[efg - 1].form.push({'dis': dis, 'read': read, 'req': req, 'input': abc, 'label': label, 'name': name, 'placeholder': placeholder, 'clas': clas, 'value': value, 'option': option })
			localStorage.setItem('arr', JSON.stringify(arr));
		}
		else if (abc == 'TEXTAREA') {
			var xt = $('<p><label> ' + label + ' </label>  <textarea  name="' + name + '"   placeholder="' + placeholder + '"   class="' + clas + '" value="' + value + '" option="' + option + '" disabled="'+ dis+'" required="'+req+'" readonly="'+read+'" >' + value + '</textarea> <button onclick=myFunction(this)>X</button> </p>');
			$("main section:nth-child(" + subv + ") div:nth-child(" + aaa + ")").append(xt);
			arr[subv - 1].subhe[efg - 1].form.push({'dis': dis, 'read': read, 'req': req, 'input': abc, 'label': label, 'name': name, 'placeholder': placeholder, 'clas': clas, 'value': value, 'option': option })
			localStorage.setItem('arr', JSON.stringify(arr));
		}

		else {

			$("main section:nth-child(" + subv + ") div:nth-child(" + aaa + ")").append('<p><label> ' + label + ' </label><input type="' + abc + '" name="' + name + '" placeholder="' + placeholder + '"   class="' + clas + '" value="' + value + '" option="' + option + '" disabled="'+ dis+'" required="'+req+'" readonly="'+read+'" </input> <button  onclick=myFunction(this)>X</button> </p>');
			arr[subv - 1].subhe[efg - 1].form.push({'dis': dis, 'read': read, 'req': req, 'input': abc, 'label': label, 'name': name, 'placeholder': placeholder, 'clas': clas, 'value': value, 'option': option })
			localStorage.setItem('arr', JSON.stringify(arr));
		}

		



		localStorage.setItem('arr', JSON.stringify(arr));

		$(".d").trigger("reset");


	});


});

function myFunction(t) {
	let head = $(t).parent()[0].innerText;
	let arr = JSON.parse(localStorage.getItem('arr'));
	let newArr = arr.filter(element => element.title != head.substr(0, head.length - 1));
	console.log(newArr);
	localStorage.setItem('arr', JSON.stringify(newArr));
	$(t).parent().remove();
	window.location.reload();
};

function removeSub(t) {
	let head = $(t).parent()[0].innerText;
	let arr = JSON.parse(localStorage.getItem('arr'));
	let final = [];
	arr.forEach((element,i) => {
		let newSubhe = element.subhe.filter(el => el.title != head.substr(0, head.length - 2))
		// console.log(newSubhe)
		arr[i].subhe = newSubhe;
	});
	localStorage.setItem('arr', JSON.stringify(arr));
	$(t).parent().remove();
	window.location.reload();
}

