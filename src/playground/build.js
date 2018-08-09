

const toggleChange = () => {

    let visibleText = document.getElementById("data");
    let BtnText = document.getElementById("toggle");

     if(visibleText.innerHTML == '' && toggle.innerHTML == "Show details") {
        visibleText.innerHTML = "Hey! look who it is. Me mario!";
         toggle.innerHTML = "Hide details";
     } else {
        visibleText.innerHTML = '';
         toggle.innerHTML = "Show details";
     }
     
}


const appRoot = document.getElementById('app');

const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button id="toggle" onClick={toggleChange}>Show details</button>
            <p id="data"></p>
        </div>
    );

    ReactDOM.render(template, appRoot);
};

render();