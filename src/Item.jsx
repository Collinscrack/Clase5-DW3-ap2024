import React from "react";

const Item = ({ tarea, eliminarTarea, index }) => {

    return (
        <>
            <div className="boton-tarea">
                <h4>{tarea}</h4>
                <button style={{ marginLeft: 'auto' }} type="button" className="btn btn-secondary btn-sm" onClick={() => eliminarTarea(index)}><i className='bx bx-trash tacho-eliminar'></i></button>
            </div>
        </>
    );
}

export default Item