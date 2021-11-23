import { AiOutlineClear } from 'react-icons/ai';
import './theNav.css'
export const TheNav = ({ location, species, status, onSelect }) => {

    let filter = `${location}, ${species}, ${status}`
    console.log("🚀 ~ file: TheNav.jsx ~ line 7 ~ TheNav ~ filter", filter)
    let filterArr = filter.split(',');
    console.log("🚀 ~ file: TheNav.jsx ~ line 9 ~ TheNav ~ filterArr", filterArr)

    const visibleTag = location || species || status ? '' : 'invisible';
    const visibleBtn = location || species || status ? '' : 'invisible';

    const mapFilterArr = filterArr.map((filt) => (
        <li

            className={`mx-1 breadcrumb-item ${visibleTag}`}>{filt}</li>
    ))

    const clearFilter = () => {
        onSelect('');
    };

    return (
        <nav className="ms-auto ms-lg-0 pe-0 navbar justify-content-end justify-content-md-center sticky-top py-1 px-3 " bg="dark" variant="dark" expand="lg"  >
            <ol className="breadcrumb d-flex align-items-center justify-content-between">
                {mapFilterArr}
                <li className="mx-2">
                    <button
                        onClick={clearFilter}
                        className={`mx-2 remove-btn pb-1 ${visibleBtn}`}
                        variant="white"
                        aria-label="Descartar filtro"
                    >
                        <AiOutlineClear />
                    </button>
                </li>
            </ol>
            
        </nav>
    )
}

