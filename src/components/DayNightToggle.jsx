export default function DayNightToggle({ bgToggle }) {
    return (
        <div className="dayNight">
            <div className="toggle">
                <input type="checkbox" id="dayNightToggle" onClick={bgToggle} />
                <label className="toggle-label" htmlFor="dayNightToggle"></label>
            </div>
        </div>
    );
}