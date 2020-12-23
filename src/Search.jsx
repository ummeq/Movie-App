import react, {useState} from 'react';

const Search = (props)  => {
    const [searchValue, setSearchValue] = useState("");

    const handleSearchInputChange = (event) => {
        setSearchValue(event.target.value);
    }

    const callSearchFunction = (e) => {
        e.preventDefault();
        props.search(searchValue);
        resetInputField();
    }

    const resetInputField = () => {
        setSearchValue("");
    }
    return (
        <>
        <form className="search">
            <input type="text"
            onChange={handleSearchInputChange}
            value={searchValue}>
            </input>
            <input onClick={callSearchFunction} type="submit" value="SEARCH"></input>
        </form>
        </>
    )
}

export default Search;