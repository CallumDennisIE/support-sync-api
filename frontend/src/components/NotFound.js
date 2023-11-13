// React import
import React from 'react';

// Custom component import
import Asset from './Asset';

const NotFound = () => {
    return (
        <div>
            <Asset message="Sorry, the page you're looking for doesn't exist" />
        </div>
    );
};

export default NotFound;