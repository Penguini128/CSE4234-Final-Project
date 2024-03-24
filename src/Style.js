const colors = {
    lightGray: "#CCCCCC",
    midGray: "#B0B0B0",
    hoverLightGray: '#EEEEEE'
}

const style = {
    globalFontSize: {
        fontSize: '16px',
        '@media screen and (max-width: 1000px)': {
            fontSize: '16px'
         }
    },
    mainBody: {
        composes: '$globalFontSize',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif, serif',
        minHeight: '100vh',
        alignItems: 'center'
    },
    mainHeader: {
        padding: '1.3em 2em',
        boxSizing: 'border-box',
        width: '100vw',
        boxShadow: 'rgb(0, 0, 0, 0.2) 0px 3px 5px'
    },
    headerItem: {
        float: 'right',
        padding: '.4em 1em',
        border: 'solid',
        borderRadius: '5px',
        borderWidth: '1px',
        borderColor: colors.lightGray,
        boxShadow: `${colors.lightGray} 0px 3px 0px 0px`,
        '&:hover': {
            backgroundColor: colors.hoverLightGray,
            borderColor: colors.midGray,
            boxShadow: `${colors.midGray} 0px 3px 0px 0px`,
            cursor: 'pointer',
        },
        '&:active': {
            transform: 'translateY(3px)',
            boxShadow: `${colors.midGray} 0px 3px 0px 0px inset`,
        }
    }
}

export default style;