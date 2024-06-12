import React, { useEffect } from 'react';

const DynamicHead = ({ title }) => {
    useEffect(() => {
        // Change the document title
        document.title = title;
    }, [title]);


};

export default DynamicHead;
