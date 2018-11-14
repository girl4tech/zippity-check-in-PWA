window.addEventListener('load', function(){
    const mapContainer = document.getElementById("map-container");
    const mainMap = document.getElementById('main-map');
    const resetLocation = document.getElementById("resetLocation");
    resetLocation.style.display="none";

    //view keyosk
    document.getElementById("keyosk-btn").addEventListener("click",function(e){
        document.getElementById("keyosk-btn").style.display = "none";
        var keyoskSpan = document.getElementById("keyosk-span");
        keyoskSpan.innerHTML = "You're Keyosk location is in Berry Library";
        var keyoskImg = document.createElement("img");
        keyoskImg.src = "./images/keyosk.png"
        document.getElementById("keyosk-card").appendChild(keyoskImg);
    })

    document.getElementById("setLocation").addEventListener("click", function(e){
        var carbtn = document.getElementById("setLocation");
        var carLocateSpan = document.getElementById("carLocate");
        carLocateSpan.innerHTML = "Turn on location services. Drag, drop, and 'set' the pin on your car's location."
        carbtn.innerHTML = "Set Pin";
        createMap();

        //create map
        function createMap (){
            var map = new Microsoft.Maps.Map(mainMap, {});
            mapContainer.style.height = '312px';
            mapContainer.style.marginBottom = '25px'; 
            //create new pushpin
            var pushpin = new Microsoft.Maps.Pushpin(map.getCenter(), {draggable: true});
            //listen to draggable events
            Microsoft.Maps.Events.addHandler(pushpin, "dragstart");
            Microsoft.Maps.Events.addHandler(pushpin, "drag");
            Microsoft.Maps.Events.addHandler(pushpin, "dragend");
            //add pin to map
            map.entities.push(pushpin);
        }
        
        //set car pin to complete first check-in step
        carbtn.addEventListener("click", function(e){
            resetLocation.style.display="flex";
            resetLocation.style.marginLeft="39%";
            mapContainer.style.display="none";
            carLocateSpan.innerHTML = "Car location set!"
            carbtn.style.display="none";

            //reset car location if necessary
            resetLocation.addEventListener("click", function(e){
                resetLocation.style.display ="none";
                carLocateSpan.innerHTML = "Turn on location services. Drag, drop, and 'set' the pin on your car's location."
                mapContainer.style.display="block";
                carbtn.style.display="flex";
                carbtn.style.justifyContent="center";
                carbtn.style.marginLeft="40%";
                createMap();
            })
        })
    })
    document.getElementById("ready").addEventListener("click",function(e){
        //THANK YOU YOUR CAR WILL BE READY SOON; ENJOY YOUR DAY
    })
})