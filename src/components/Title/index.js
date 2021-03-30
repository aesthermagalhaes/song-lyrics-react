
const titleStyle = {
    'margin': '1.25em',
    'textAlign': 'center',
    'textTransform': 'uppercase'
};

function Title ({value}) {
    return (
        <h1 style={titleStyle}>{value}</h1>
    );
}

export default Title;