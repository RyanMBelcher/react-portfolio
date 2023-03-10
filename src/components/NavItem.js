import '../styles/NavItem.css'

export function NavItem({ content, onClick, page, currentPage }) {
    const isSelected = page === currentPage
    console.log(isSelected, page);
    return (
        <li className={`header-item ${isSelected ? 'header-item-selected' : ''}`}>
            <a
                onClick={onClick}
                href={`#${page}`}
            >
                {isSelected ? <svg className='header-svg' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M2 9l-1-7h5.694c1.265 1.583 1.327 2 3.306 2h13l-1 5h-4.193l-3.9-3-1.464 1.903 1.428 1.097h-1.971l-3.9-3-2.307 3h-3.693zm-2 2l2 11h20l2-11h-24z" /></svg>
                    : <svg className='header-svg' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11 5c-1.629 0-2.305-1.058-4-3h-7v20h24v-17h-13z" /></svg>}
                {content}
            </a>
        </li>
    );
};