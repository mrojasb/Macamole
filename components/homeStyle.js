let homeStyle = {
    startBox: {
        position: 'fixed',
        top: 0,
        left: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
    },

    imgBox: {
        position: 'relative',
    },

    roomImg: {
        width: '100%', // Make the image responsive
        maxWidth: '1200px', // Set a maximum width
    },

    shoulderBox: {
        position: 'absolute',
        top: '50%', // Adjust as needed
        left: '50%', // Adjust as needed
        width: '20%', // Use relative units
        height: '20%', // Use relative units
        maxWidth: '200px', // Set a maximum size
        maxHeight: '200px', // Set a maximum size
        backgroundColor: 'transparent', // Make it transparent
        border: 'none', // Remove border
        cursor: 'pointer', // Change cursor to pointer
        transform: 'translate(-50%, -50%)', // Center the button
        zIndex: 10, // Ensure it is above other elements
    },

    callingTap: {
        fontFamily: 'Spartan',
        fontSize: '1.5em',
        padding: '1.5rem',
        textAlign: 'center',
        position: 'absolute',
        top: '10%', // Use relative units
    },

    arrow: {
        position: 'absolute',
        top: '62%',
        left: '54%',
        transform: 'rotate(-10deg)',
        width: '10%', // Use relative units
        maxWidth: '50px', // Set a maximum size
        height: 'auto', // Maintain aspect ratio
        background: 'url(../img/arrow.png) no-repeat',
        backgroundSize: 'contain',
    },

    // Add media queries for smaller screens
    '@media (max-width: 768px)': {
        roomImg: {
            width: '90%', // Adjust image size for smaller screens
        },
        shoulderBox: {
            width: '30%', // Adjust button size for smaller screens
            height: '30%',
        },
        callingTap: {
            fontSize: '1.2em', // Adjust font size for smaller screens
        },
        arrow: {
            width: '15%', // Adjust arrow size for smaller screens
        },
    },

    '@media (max-width: 480px)': {
        roomImg: {
            width: '100%', // Adjust image size for smaller screens
        },
        shoulderBox: {
            width: '40%', // Adjust button size for smaller screens
            height: '40%',
        },
        callingTap: {
            fontSize: '1em', // Adjust font size for smaller screens
        },
        arrow: {
            width: '20%', // Adjust arrow size for smaller screens
        },
    },
};

export default homeStyle;
