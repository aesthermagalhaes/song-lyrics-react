import { useRouteMatch, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getSongBySlug, deleteSongBySlug } from '../../services';
import Panel from './../../components/Panel';

import './song.css';
import YoutubeVideo from '../../components/YoutubeVideo';

function Song() {
  const match = useRouteMatch('/songs/:slug');

  const [song, setSong] = useState([]);

  useEffect(() => {
    getSongBySlug(match.params.slug)
      .then(storageSong => {
        setSong(storageSong);
      })
      .catch(error => alert(error));
  }, []);

  function handleDeleteMusic(event) {
    event.preventDefault();

    const option = window.confirm('Deseja mesmo excluir o registro?');

    if (!option) {
      return;
    }

    deleteSongBySlug(song.slug)
      .then(message => {
        alert(message);
        window.location.href = '/songs';
      })
      .catch(error => alert(error));
  }

  return (
    <div style={{ marginTop: '1.25em' }}>
      <Panel title={song.name} style={{ padding: '20px' }}>
        <div id='song-info'>
          <div>
            {song.image !== undefined && (
              <div id='song-image'>
                <img src={song.image} alt='capa da música' id='song-image' />
              </div>
            )}
            <div className='song-description'>
              <h2>
                Artista:{' '}
                <span style={{ fontWeight: 'normal', fontSize: '20px' }}>
                  {song.artist}
                </span>
              </h2>
              <div>
                <p>{song.estilo}</p>

                <p>{song.ano} </p>
              </div>
            </div>
          </div>
          <div>
            {song.url !== undefined && (
              <YoutubeVideo title={song.name} url={song.url} />
            )}
          </div>
        </div>

        <div style={{ padding: '20px' }}>
          <pre>{song.lyrics}</pre>
        </div>

        <div id='buttons'>
          <Link
            to={`/songs/edit/${song.slug}`}
            className='default-btn'
            style={{ display: 'inline-block' }}
          >
            editar
          </Link>
          <button className='default-btn' onClick={handleDeleteMusic}>
            excluir
          </button>
        </div>
      </Panel>
    </div>
  );
}

export default Song;
