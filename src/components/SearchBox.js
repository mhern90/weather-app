import React from 'react';

const SearchBox = ({ clickEvents, searchId, hasError, inputChangeEvents}) => {

    return (
        <div className="tc center">
            <div>
                <input id={searchId} className="f6 f5-l bn black-80 bg-white pa3 lh-solid br2-ns br--left-ns" placeholder="Find weather by city" type="text" onChange={inputChangeEvents} />
                <button onClick={clickEvents} className="f6 f5-l pv3 tc bn white pointer br2-ns br--right-ns dib white bg-dark-blue">Search</button>
            </div>
            { hasError && 
                <div data-error={searchId} className="error-message dib pt2 f6 dark-red"></div>
            }     
        </div>
    )
} 

export default SearchBox;