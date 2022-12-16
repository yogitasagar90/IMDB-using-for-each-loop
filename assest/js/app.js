var cl = console.log;

const imgUrl = "https://image.tmdb.org/t/p/w1280";
var imgContainer = document.getElementById("imgContainer");
var result = "";
movieArr.forEach(function (movie) {
    result += `<div class="col-lg-3 col-md-6 col-xs-12">
                    <div class="card">
                        <figure class="movieCard">
                        <img src="${imgUrl}${movie.backdrop_path}" alt="${movie.title}" title=${movie.title}">
                            <figcaption class="text-white p-4">
                                <div class="row">
                                    <div class="col-sm-10">
                                        <h3>${movie.title}</h3>
                                    </div>
                                    <div class="col-sm-2">${movie.vote_average}</div>
                                </div>
                            </figcaption>
                            <div class="overview bg-white p-4">
                                <h4>Overview</h4>
                                <p>${movie.overview}</p>
                            </div>
                        </figure>
                    </div>
                </div>`;
})
imgContainer.innerHTML = result;