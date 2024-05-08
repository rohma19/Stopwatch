import formatUnit from '../utils/formatUnit.js';
import formatMilliseconds from '../utils/formatMilliseconds.js';


const updateTimeDom = (timeDom, time) => {
    // update milliseconds
    timeDom.querySelector('.milliseconds').innerText = formatMilliseconds(
        time.milliseconds,
    );

    // update seconds only after 1000 milliseconds
    if (time.seconds !== time.oldSeconds) {
        timeDom.querySelector('.seconds').innerText = formatUnit(
            time.seconds
        );
    }

    // update minutes only after 60 seconds
    if (time.minutes !== time.oldMinutes) {
        timeDom.querySelector('.minutes').innerText = formatUnit(
            time.minutes
        );
    }

    time.oldMinutes = time.minutes;
    time.oldSeconds = time.seconds;
};

export default updateTimeDom;
