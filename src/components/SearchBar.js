import React, { useState } from 'react'

const SearchBar = ({ setIpAddress }) => {
    const [search, setSearch] = useState('')
    
    const handleFormSubmit = e => {
        e.preventDefault();
        setIpAddress(search);
        setSearch('')
    }
    return (
        <div className='search-bar'>
            <form className='search-bar__form' onSubmit={(e) => { handleFormSubmit(e) }}>
                <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <input type="search" value={search} onChange={(event) => setSearch(event.target.value)} id="default-search" className="block w-full p-2.5 pl-3 text-sm  border border-gray-300 rounded-lg " placeholder="Search for any IP address" required />
                    <button type="submit" className="text-white absolute right-0 bottom-0 h-full bg-zinc-700 hover:bg-zinc-800 rounded-r-lg  px-4 py-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default SearchBar