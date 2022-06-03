import Paciente from "./Paciente"

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => { //Se llaman los prop desde app.js
    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

            {pacientes && pacientes.length ? (
                <> 
                    <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
                    <p className="text-xl mt-5 mb-10 text-center">
                        Administra tus {''}
                        <span className="text-indigo-600 font-bold ">Pacientes y Citas</span>
                    </p>

                    { pacientes.map( paciente => (  //Esta es la forma correcta de poder iterar en el arreglo para react utilizando el .map
                        //llama el componente cuantas veces se requiera en la iteracion
                        <Paciente 
                            key={paciente.id} // este es el id de indie que trae el arreglo
                            paciente={paciente}
                            setPaciente={setPaciente} // Llama desde paciente setPaciente para editar
                            eliminarPaciente={eliminarPaciente} // Llama desde Paciente para eliminar
                        />
                    ))}
                </>

            ) : (
                <>
                    <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
                    <p className="text-xl mt-5 mb-10 text-center">
                        Comienza agregando pacientes {''}
                        <span className="text-indigo-600 font-bold ">y aparecerán en este lugar</span>
                    </p>
                </>
            )}
        </div>
    )
}

export default ListadoPacientes
