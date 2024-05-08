import data from '../data.js';
import dom from '../dom.js';
import updateTimeDom from '../components/updateTimeDom.js';

const resetHandler = () => {
    if (data.intervalId) {
        clearInterval(data.intervalId);
        data.intervalId = null;
    }
    data.minutes = 0;
    data.seconds = 0;
    data.milliseconds = 0;
    updateTimeDom(dom.time, data);
};

export default resetHandler;
