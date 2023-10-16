import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SearchName = () => {
  const [searchCa, setSearchCa] = useState([]);
  //   const [searchValue, setSearchValue] = useState("");
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  // Simulated data for the search
  //   const names = ['John', 'Alice', 'Bob', 'Charlie', 'David', 'Eve'];

  // console.log(searchResults, showDropdown);

  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearchText(query);
    setShowDropdown(query.length > 0);
    searchNames(query);
  };

  const searchNames = (query) => {
    const filteredNames = searchCa.filter((name) =>
      name.name.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredNames);
  };

  const handleSearchButtonClick = (e) => {
    e.preventDefault();
    setShowDropdown(true);
    searchNames(searchText);
  };

  //   const handleNameClick = (nameId) => {
  //     const selectedName = names.find(name => name.id === nameId);
  //     if (selectedName) {
  //       history.push(`/name/${selectedName.id}`);
  //     }
  //   };

  useEffect(() => {
    fetch("https://mcs-server-seven.vercel.app/users")
      .then((res) => res.json())
      .then((data) => {
        setSearchCa(data);
        // console.log(data);
      });
  }, []);

  return (
    <div>
      <form>
        <div className="max-w-xl pt-8">
          <div className="flex space-x-4">
            <div className="flex rounded-md overflow-hidden w-full">
              <input
                type="text"
                placeholder="Search by name"
                value={searchText}
                onChange={handleInputChange}
                // onChange={(e) => setSearchValue(e.target.value)}
                className="w-full border-2 px-4 outline-0 rounded-md rounded-r-none"
              />
              <input
                onClick={handleSearchButtonClick}
                className="bg-[#0076CE] cursor-pointer font-sans text-white px-16 text-lg font-semibold py-4 rounded-r-md"
                type="submit"
                value="Search"
              />
            </div>
          </div>
          {showDropdown && (
            <ul>
              {searchResults.map((name) => (
                // <li key={index}>{name.name}</li>
                <li
                  className="border-2 mt-2 px-4 rounded-md py-2"
                  key={name._id}>
                  {/* onClick={() => handleNameClick(name._id)} */}
                  <Link to={`/details/${name._id}`}>{name.name}</Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </form>
    </div>
  );
};

export default SearchName;
