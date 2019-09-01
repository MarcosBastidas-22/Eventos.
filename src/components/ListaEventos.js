import React from 'react';
import {EventosConsumer} from '../context/contextEventos'; 
import Evento from './Evento';

const ListaEventos = () => {
    return (
        <div className="uk-child-width-1-3@m" uk-grid="true">
            <EventosConsumer>
                {(value)=>{
                    console.log(value);
                    return value.eventos.map(evento => (
                        <Evento 
                            key={evento.id}
                            evento={evento}
                        />
                    ))
                }}
            </EventosConsumer>
        </div>
    );
};

export default ListaEventos;