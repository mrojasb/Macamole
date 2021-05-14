let homeStyle = {
    startBox: {
        position: 'fixed',
        top: 0,
        left:0,

        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
        
        height: '100%',
        width: '100%',
    },

    imgBox: {
        position: 'relative',
    },

    roomImg: {
        width: '1200px',
    },

    shoulderBox: {
        width: '8.85%',
        height: '3.7%',
        
        position: 'absolute',
        top: '59.2%',
        left: '46.8%',
    
        cursor: 'pointer',
        opacity: '0%',
        },

    callingTap: {
        fontFamily: 'Spartan',
        fontSize: '1.5em',
        padding: '1.5rem',

        textAlign: 'center',
        position: 'absolute',
        top: 60,
        
    },

    arrow: {
        position: 'absolute',
        top: '62%',
        left: '54%',
        transform: 'rotate(-10deg)',

        width: '50px',
        height: '100px',

        background: 'url(../img/arrow.png) no-repeat',
        backgroundSize: 'contain',
    }


}
export default homeStyle;
