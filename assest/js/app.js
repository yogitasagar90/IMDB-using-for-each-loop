var cl = console.log;


var imgContainer = document.getElementById("imgContainer");
var result = "";
countries.forEach(function (flagg) {
    result += `<div class="col-lg-3 col-md-6 col-xs-12">
                    <div class="card">
                        <figure class="cCard">
                            <img src="${flagg.flag}" alt="Flag Here">
                            <figcaption>
                                <div class="cName">
                                    <h2>${flagg.name}</h2>
                                </div>
                                <div class="cData">
                                    <ul>
                                        <li><strong>Capital: </strong>${flagg.capital}</li>
                                        <li><strong>Language: </strong>${flagg.languages} </li>
                                        <li><strong>Population: </strong>${flagg.population}</li>
                                    </ul>
                                </div>
                            </figcaption>
                        </figure>
                    </div>
                </div>`;
})
imgContainer.innerHTML = result;