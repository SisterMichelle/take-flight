import Sigrid from './Sigrid.jsx';

export default function Footer() {
    return (
        <footer className="fixed bottom-0 left-0 w-full h-1/9 grid grid-cols-5 gap-2 p-10 text-xs text-stone-400 place-content-center">
            <div>
                <Sigrid />
            </div>
        </footer>
    );
}