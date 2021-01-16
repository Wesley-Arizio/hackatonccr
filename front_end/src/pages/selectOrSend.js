import React from 'react';
import { Link} from 'react-router-dom';

export default function SelectOrSend(){
    return(
        <div id='select-page'>
            <div id='content-wrapeer'>
                <label className="form-label">Selecione um arquivo de vídeo</label>
                <input type="file" accept="application/pdf" />
                <p>OU</p>

                <Link to=''>Envie um link</Link>

            </div>
        </div>
    )
}