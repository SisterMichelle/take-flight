import MLogo from './Animations/MLogo.jsx';
import BreadCrumb from './BreadCrumb.jsx';

export default function Menu({ isAuthor, goHome }) {
    return (
        <menu className="fixed flex justify-start w-full items-center max-h-28 min-h-max z-10">
            <MLogo />
            <BreadCrumb isAuthor={isAuthor} goHome={goHome} />
        </menu>
    );
}