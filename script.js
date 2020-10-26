// TODO: add code here
window.addEventListener('load', function(){
    fetch('https://handlers.education.launchcode.org/static/astronauts.json')
        .then(function(response)
            {return response.json()}
        ).then(function(json){
            const container = document.getElementById('container');
            let astronauts = '';
            for(astronaut of json){
                astronauts += `
                <div class="astronaut">
                    <div class="bio">
                        <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                        <ul>
                            <li>Hours in space: ${astronaut.hoursInSpace}</li>
                            <li>Active: ${astronaut.active}</li>
                            <li>Skills: ${astronaut.skills}</li>
                        </ul>
                    </div>
                    <img class ="avatar" src=${astronaut.picture}>
                </div>
                `
            }
            container.innerHTML = astronauts;
        })
            
});
function checkIfActive(astronaut){
    if (astronaut.active === true){
        return `<span style="color:green">${astronaut.active}</span>`
    }else{
        return astronaut.active;
    }

}