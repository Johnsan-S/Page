document.getElementById('myButton').addEventListener('click', function () {
    var randomNumber = Math.floor(Math.random() * 100) + 1;
    document.getElementById('Output').innerHTML = ' +  ' + randomNumber + ' K ';
  });
  


  
  function pricing() {
    var heading = document.getElementById("changes");
    var currentValue = heading.innerHTML;

    if (currentValue === "$ 50 /month") {
      heading.innerHTML = "$ 35 /year";
    } else  {
      heading.innerHTML = "$ 50 /month";
    }

    var heading = document.getElementById("changes1");
    var currentValue = heading.innerHTML;

    if (currentValue === "$ 50 /month") {
      heading.innerHTML = "$ 35 /year";
    } else  {
      heading.innerHTML = "$ 50 /month";
    }
    var heading = document.getElementById("changes2");
    var currentValue = heading.innerHTML;

    if (currentValue === "$ 50 /month") {
      heading.innerHTML = "$ 35 /year";
    } else  {
      heading.innerHTML = "$ 50 /month";
    }
    var heading = document.getElementById("changes3");
    var currentValue = heading.innerHTML;

    if (currentValue === "$ 50 /month") {
      heading.innerHTML = "$ 35 /year";
    } else  {
      heading.innerHTML = "$ 50 /month";
    }
  }
  