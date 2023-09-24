import { useEffect, useState } from "react";
import { FaRegStar, FaSearch, FaStar } from "react-icons/fa";
import { HiOutlineBookOpen } from "react-icons/hi2";
import Rating from "react-rating";
import CouresCart from "../../Components/CouresCart/CouresCart";
import { Helmet } from "react-helmet-async";
import Pagination from "../../Components/paginaition/Pagination";

const Classes = () => {

    const [classes, setClasses] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState(''); // State for search query
    const [filteredMovies, setFilteredMovies] = useState([]); // State for filtered movies
    const [isSearchClicked, setIsSearchClicked] = useState(false); // State to track whether the search button is clicked
    const moviesPerPage = 10;

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    const handleNumberClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const searchHandle = async () => {
        setCurrentPage(1);
        setIsSearchClicked(true);
        const moviesMatchingSearch = classes.filter((movie) =>
            movie?.Title?.toLowerCase().includes(searchQuery.toLowerCase())

        );
        setFilteredMovies(moviesMatchingSearch);

    };
    useEffect(() => {
        fetch('https://speakup-ivory.vercel.app/allclasses')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [])
    return (
        <div>
            <div>
                <Helmet>
                    <title>CLASSES || SpeakUp</title>
                </Helmet>
            </div>
            <p className="text-4xl text-center font-sans font-semibold mt-3">We Provide Best Coures For Students</p>
            <div className="flex items-center gap-3 justify-center py-2">
                <input
                    type="search"
                    className="rounded-full px-3 py-3 w-[80%] md:w-[50%] lg:w-[30%] bg-base-300"
                    placeholder="Search Classes"
                    value={searchQuery}
                    onChange={(event) => setSearchQuery(event.target.value)}
                />
                <FaSearch size={22} onClick={searchHandle} className='text-cyred' />
            </div>
            <div className="grid md:grid-cols-3 gap-2">
                {
                    classes.map(object => <CouresCart key={object._id} object={object} ></CouresCart>)
                }
            </div>
            <Pagination
                currentPage={currentPage}
                totalPages={Math.ceil(
                    (isSearchClicked ? filteredMovies : classes).length / moviesPerPage
                )}
                onPageChange={handlePageChange}
                onNumberClick={handleNumberClick}
            />
        </div>
    );
};


/**
 * 
 * 
 * 
 * **/
export default Classes;