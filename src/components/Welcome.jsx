import { forwardRef } from 'react';

import Emotion from './Emotion.jsx';
import Greeting from './Greeting.jsx';
import Sigrid from './Sigrid.jsx';

const welcome = forwardRef(function Welcome({ userName }, ref) {
    return (
        <div id="welcome" ref={ref} className="grid grid-cols-2 grow items-end">
            <Greeting userName={userName} />
            <Sigrid />
            <Emotion />
        </div>
    );
});

export default welcome;