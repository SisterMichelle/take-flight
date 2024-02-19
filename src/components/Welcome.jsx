import Emotion from './Emotion.jsx';
import Greeting from './Greeting.jsx';
import Sigrid from './Sigrid.jsx';

export default function Welcome({ userName }) {
    return (
        <div id="welcome" className="grid grid-cols-2 grow items-end">
            <Greeting userName={userName} />
            <Sigrid />
            <Emotion />
        </div>
    );
}