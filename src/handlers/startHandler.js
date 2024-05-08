import data from '../data.js';
import dom from '../dom.js';
import updateTimeDom from '../components/updateTimeDom.js';
import updateTime from '../utils/updateTime.js';


  const startHandler = () => {
    if (data.intervalId !== null) {
        clearInterval(data.intervalId);
        data.intervalId = null;
    }

    data.intervalId = setInterval(() => {
        const time = updateTime(data);
        updateTimeDom(dom.time, time);
    }, 10);
};

export default startHandler;
