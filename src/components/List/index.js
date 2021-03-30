import './list.css';
import { Link } from 'react-router-dom';
import Panel from './../Panel';

function List({ title, items }) {
  return (
    <Panel title={title}>
      <div className='list-items'>
        {items.map((item, idx) => (
          <Link
            key={idx}
            to={`/songs/${item.slug}`}
            style={{ textDecoration: 'none' }}
          >
            <div>
              {item.image !== undefined && (
                <img
                  src={item.image}
                  alt='capa da música'
                  className='song-image-avatar'
                />
              )}
              <container className='container-names'>
                <strong>{item.name} :</strong>
                <p className='break'> {item.artist}</p>
              </container>

              <container>
                <p> {item.estilo} </p>
                <p> {item.ano} </p>
              </container>
            </div>
          </Link>
        ))}
      </div>
    </Panel>
  );
}

export default List;
