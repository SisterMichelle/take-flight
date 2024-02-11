export default function DayNightToggle({ toggleDayNight }) {
    return (
        <div className="absolute top-0 right-0 dayNight">
            <div className="toggle">
                <input type="checkbox" id="dayNightToggle" onClick={toggleDayNight} />
                <label className="toggle-label" htmlFor="dayNightToggle"></label>
            </div>
        </div>
    );
}