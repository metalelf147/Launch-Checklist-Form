window.addEventListener("load", function () {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
       response.json().then( function(json) {
               document.getElementById("missionTarget").innerHTML += `
               <h2>Mission Destination</h2>
                  <ol>
                     <li>Name: ${json[0].name}</li>
                     <li>Diameter: ${json[0].diameter}</li>
                     <li>Star: ${json[0].star}</li>
                     <li>Distance from Earth: ${json[0].distance}</li>
                     <li>Number of Moons: ${json[0].moons}</li>
                  </ol>
               <img src="${json[0].image}">
               `
           });
         });
      });



window.addEventListener("load", function() {
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {


      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let copilotNameInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass]");
      


      if(pilotNameInput.value === "") {
         alert("All fields are required. What is the pilot's name?"); 
         event.preventDefault();
      }

      if(copilotNameInput.value === "") {
         alert("All fields are required. What is the copilot's name?"); 
         event.preventDefault();
      }

      if(isNaN(Number(fuelLevelInput.value))) {
         alert("Fuel level must be a number."); 
         event.preventDefault();
      }

      if(isNaN(cargoMassInput.value)) {
         alert("Cargo mass must be a number."); 
         event.preventDefault();
      }

      event.preventDefault();
   });

});


let faultyItems = this.document.getElementById("faultyItems");
faultyItems,addEventListener("submit", function(event) {

   let pilotNameInput = document.querySelector("input[name=pilotName]");
   let copilotNameInput = document.querySelector("input[name=copilotName]");
   let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
   let cargoMassInput = document.querySelector("input[name=cargoMass]");

   document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotNameInput.value} is ready.` 
   document.getElementById("copilotStatus").innerHTML = `Copilot ${copilotNameInput.value} is ready.` 
   document.getElementById("launchStatus").style.color = "green";
   document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch.";

  if(fuelLevelInput.value < 10000) {
     document.getElementById("faultyItems").style.visibility = "visible";
     document.getElementById("fuelStatus").innerHTML = "Not enough fuel for the journey.";
     document.getElementById("launchStatus").style.color = "red";
     document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch.";
  }

  if(cargoMassInput.value > 10000) {
   document.getElementById("faultyItems").style.visibility = "visible";
   document.getElementById("cargoStatus").innerHTML = "Too much mass for the shuttle to take off.";
   document.getElementById("launchStatus").style.color = "red";
   document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch.";
   }
});
