var letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

//document.getElementsByName("mode")[0].checked = true;

setInterval(function() {
  var a = parseInt(document.getElementById("a").value);
  var b = parseInt(document.getElementById("b").value);
  var input = document.getElementById("inputText").value.toUpperCase();
  var output = "";
  var inv = findInversion();
  for(var i = 0; i < input.length; i++)
  {
    if(letters.indexOf(input.charAt(i)) == -1)
    {
      output = output + input.charAt(i);
    }
    else
    {
      if(document.getElementsByName("mode")[0].checked)
      {
        output = output + letters[((a*letters.indexOf(input.charAt(i)))+b)%26];
      }
      else
      {
        output = output + letters[(((letters.indexOf(input.charAt(i))-b)+26)*inv)%26];
      }
    }
  }
  document.getElementById("outputText").value = output;
}, 100);


function findInversion()
{
  var a = parseInt(document.getElementById("a").value);
  for(var i = 1; i <= 100; i++)
  {
    if((((26*i)+1)%a) == 0)
    {
      return (((26*i)+1)/a);
    }
  }
  alert("uninvertable");
}  