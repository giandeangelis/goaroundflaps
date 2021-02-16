//Script for sticky headers

const landmarks = document.getElementById('landmarks-title');
const airports = document.getElementById('airports-title');
const aircraft = document.getElementById('aircraft-title');
const header = document.querySelector('header');
const landmarksScroll = document.getElementById('landmarks-scroll');

const getOffsetTop = element => {
    let offsetTop = 0;
    while (element) {
        offsetTop += element.offsetTop;
        element = element.offsetParent;
    }
    return offsetTop
}

const landmarksOffset = getOffsetTop(landmarks);
const airportsOffset = getOffsetTop(airports);
const aircraftOffset = getOffsetTop(aircraft);
const headerOffset = getOffsetTop(header);

const stickLandmarks = () => {
    if (window.scrollY > (landmarksOffset - headerOffset)) {
        landmarks.classList.add('sticky');
    } else {
        landmarks.classList.remove('sticky');
    };
}

const stickAirports = () => {
    if (window.scrollY > (airportsOffset - headerOffset)) {
        airports.classList.add('sticky');
        landmarks.classList.remove('sticky');
    } else {
        airports.classList.remove('sticky');
    };
    if (window.scrollY > (airportsOffset - headerOffset - landmarks.offsetHeight)) {
        //landmarksScroll.style.display = 'block';
    }
}

const stickAircraft = () => {
    if (window.scrollY > (aircraftOffset - headerOffset)) {
        aircraft.classList.add('sticky');
        airports.classList.remove('sticky');
    } else {
        aircraft.classList.remove('sticky');
        
    };
}

window.addEventListener('scroll', stickLandmarks);
window.addEventListener('scroll', stickAirports);
window.addEventListener('scroll', stickAircraft);