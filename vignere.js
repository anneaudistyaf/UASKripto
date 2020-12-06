var letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

//document.getElementsByName("mode")[0].checked = true;

setInterval(function() {
  var a = parseInt(document.getElementById("a").value);
  var b = parseInt(document.getElementById("b").value);
  var key = document.getElementById("key1").value.toUpperCase();
  var input = document.getElementById("inputText2").value.toUpperCase();
  input = input.split(' ').join('')
  var output = "";

  for(var i = 0; i < input.length; i++)
  {	
	if( key.length < input.length)
	{
		key=key+key;
	}
    if(letters.indexOf(input.charAt(i)) == -1)
    {
      output = output + input.charAt(i);
    }
    else
    {
      if(document.getElementsByName("mode2")[0].checked)
      {
        output = output + letters[(letters.indexOf(input.charAt(i))+letters.indexOf(key.charAt(i)))%26];
      }
      else
      {
        output = output + letters[((letters.indexOf(input.charAt(i))-letters.indexOf(key.charAt(i)))+26)%26];
      }
    }
  }
  document.getElementById("outputText2").value = output;
  
}, 100);