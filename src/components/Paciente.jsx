const Paciente = ({paciente, setPaciente, eliminarPaciente}) => { //realizando destructuring para traer los props
    const { nombre, propietario, email, fecha, sintomas, id } = paciente  //creo las variables para tomar los datos que vienen desde el arreglo pacientes

    const handleEliminar = () => {
        const respuesta = confirm('Deseas eliminar este paciente?'); //Eliminando el paciente, funcion que va a utilizar el boton abajo con el handle

        if(respuesta) {
            eliminarPaciente(id)
        }
    }

    return (
        <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''} {/* Pone valor en vacio */}
                <span className="font-normal normal-case">{nombre}</span> {/* {nombre} captura el dato nombre que viene desde la variable*/}
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
                <span className="font-normal normal-case">{propietario}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
                <span className="font-normal normal-case">{email}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: {''}
                <span className="font-normal normal-case">{fecha}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Síntomas: {''}
                <span className="font-normal normal-case">{sintomas}</span>
            </p>

            {/* Botones para editar y eliminar */}
            <div className="flex justify-between mt-10">
                <button 
                    type="button"
                    className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
                    onClick={() => setPaciente(paciente)} //Manda llamar la funcion para que se ejecute el onclic de edicion, importante la funcion flecha
                >Editar</button>

                <button 
                    type="button"
                    className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
                    onClick={handleEliminar} //Elimina el paciente
                >Eliminar</button>
            </div>
        </div>
    )
}

export default Paciente
