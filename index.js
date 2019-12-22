

function fetchDogImg() {
    let numberDogs = $('#dogNumber').input
    fetch(`https://dog.ceo/api/breeds/image/random/${numberDogs}`)
    .then(response => response.json)
    .then(responseJson => console.log(responseJson))
    .catch(error =>console.log("fetchDogImg failed to run correctly. the error was:", error))
}


function watchButton() {
    $('#submitButton').on('click', function() {
        fetchDogImg();
        console.log('watchButton ran');
    });
};


$(console.log('page ready and running'),
    watchButton()
  )