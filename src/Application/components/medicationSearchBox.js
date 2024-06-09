import React, { useState } from 'react';
import { FormControl, ListGroup } from 'react-bootstrap';

const SearchBox = () => {
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    const items = [
        'apple',
        'banana',
        'cherry',
        'date',
        'grape',
        'lemon',
        'melon',
        'orange',
        'peach',
        'pear',
        'plum',
        'strawberry',
    ];

    const handleInputChange = (e) => {
        const value = e.target.value;
        setQuery(value);
        if (value) {
            const filteredSuggestions = items.filter(item =>
                item.toLowerCase().includes(value.toLowerCase())
            );
            setSuggestions(filteredSuggestions);
        } else {
            setSuggestions([]);
        }
    };

    const handleSuggestionClick = (suggestion) => {
        setQuery(suggestion);
        setSuggestions([]);
    };

    return (
        <div className="search-box ">
            <FormControl
                type="text"
                placeholder="Search by brand name, generic name, or by health condition..."
                value={query}
                onChange={handleInputChange}
                style={{ padding:15 }}
            />
            {suggestions.length > 0 && (
                <ListGroup className="autocomplete-dropdown">
                    {suggestions.map((suggestion, index) => (
                        <ListGroup.Item
                            key={index}
                            onClick={() => handleSuggestionClick(suggestion)}
                        >
                            {suggestion}
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            )}
        </div>
    );
};

export default SearchBox;
