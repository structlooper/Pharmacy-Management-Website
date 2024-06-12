import React, { useState } from 'react';
import { FormControl, ListGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import localMedicationList from '../utils/localMedicationList';

const SearchBox = () => {
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const navigate = useNavigate();




const handleInputChange = (e) => {
        const value = e.target.value;
        setQuery(value);
        if (value) {
            const filteredSuggestions = localMedicationList.filter(item =>
                item['Label'].toLowerCase().includes(value.toLowerCase())
            );
            setSuggestions(filteredSuggestions);
        } else {
            setSuggestions([]);
        }
    };

    const handleSuggestionClick = (suggestion) => {
        setQuery(suggestion['label']);
        setSuggestions([]);
        window.location.assign(`/medicineDetails/${suggestion['Representative Product SKU']}`);

        // navigate(`/medicineDetails/${suggestion['Representative Product SKU']}`);
    };

    return (
        <div className=" ">
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
                            style={{ cursor:'pointer' }}
                        >
                            {suggestion['Label'] + ' . ' + suggestion['Form']}
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            )}
        </div>
    );
};

export default SearchBox;
