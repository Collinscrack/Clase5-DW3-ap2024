import React, { useState } from 'react';
import Item from './Item';
const Entrada = () => {
    const [inputValue, setInputValue] = useState('');
    const [tareas, setTareas] = useState([]);

    const cambioinput = (event) => {
        setInputValue(event.target.value);
    };

    const clickboton = () => {
        if (inputValue.trim() !== '') {
            setTareas([...tareas, inputValue]); 
            setInputValue('');
        }
    };

    const eliminarTarea = (index) => {
        setTareas(tareas.filter((_, i) => i !== index));
    };

    return (
        <>
            <div>
                <div>
                    <div className="input-group mb-3">
                        <input value={inputValue} onChange={cambioinput} type="text" className="form-control" placeholder="Ingrese una tarea" aria-label="Ingrese una tarea" aria-describedby="button-addon2"></input>
                        <button onClick={clickboton} className="btn btn-primary" type="button" id="button-addon2">Añadir Tarea</button>
                    </div>
                </div>
                <hr />
                <div>
                    {tareas.map((tarea, index) => (
                        <Item key={index} index={index} tarea={tarea} eliminarTarea={eliminarTarea} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Entrada;