export default function BreadCrumb({ isAuthor, goHome }) {
    const homeClass = isAuthor ? "cursor-pointer text-stone-100 hover:text-sky-400" : "w-24 cursor-default text-stone-100";
    return (
        <nav className="flex gap-4 px-4 mx-2 bg-black w-full rounded-full shadow-2xl" aria-label="Breadcrumb">
            <a onClick={() => {goHome(null)}} className={homeClass}>Home</a>
            {isAuthor && 
                <> 
                    <span className="text-stone-100"> | </span>
                    <a className="w-24 text-sky-400 cursor-default">Author</a>
                </>
            }
        </nav>
    );
}