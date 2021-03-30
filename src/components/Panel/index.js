import './panel.css';

function Panel({ title, children }) {
    return (
        <div>
            <div className="panel">
                <div className="panel-title">{ title }</div>
                <div className="panel-content">
                    { children }
                </div>             
            </div>
        </div>
    );
}

export default Panel;