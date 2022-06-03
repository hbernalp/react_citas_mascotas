import { useState, useEffect } from 'react';
import Error from './Error'

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => { //se crean los destructurin para enviarlos al componente padre
    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');

    const [error, setError] = useState(false)


    useEffect(() => { //Escucha cuando algun cambio suceda para ejecutar algo
        if( Object.keys(paciente).length > 0  ) {//Forma de comprobar si el objeto tiene algo
            setNombre(paciente.nombre) //Estos set hacen que se vean los datos del paciente en el formulario
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)
        }
    }, [paciente]) // estas son las dependecias, este se ejcuta solamente cuando la dependencia paciente haya cambiado
                    // Si coloco el [] vacio significa que se va a ejecutar una sola vez
                    // [paciente], se ejecuta cada vez que la dependencia esta lista


    
    // Funcion que genera el Id random para tener el indice de los datos del arreglo
    const generarId = () => {
        const random = Math.random().toString(36).substr(2);
        const fecha = Date.now().toString(36)
        return random + fecha
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validación del Formulario
        if( [ nombre, propietario, email, fecha, sintomas ].includes('') ) {
            console.log('Hay Al Menos un campo vacio')

            setError(true)
            return;
        } 
        
        setError(false)


        // Objeto de Paciente para llenar el arreglo useState que esta en el app.js
        const objetoPaciente = {
            nombre, //Como la llave y el valor del objeto tienen el mismo valor no es necesario colocar los dos datos en la construccion del objeto
            propietario, 
            email, 
            fecha, 
            sintomas
        }

        if(paciente.id) {
            // Editando el Registro
            objetoPaciente.id = paciente.id
            const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState )

            setPacientes(pacientesActualizados) //Coloca el valor de los pacientes del prop en el arreglo
            setPaciente({}) //Limpia el state para limpiar la memoria

        } else {
            // Nuevo registro
            objetoPaciente.id = generarId();
            /*Se hace una copia del arreglo original con expred operator ...pacientes, 
            para agregar los datos en el nuevo arreglo de los pacientes que viene desde el objeto*/
            setPacientes([...pacientes, objetoPaciente]); 
        }

        // Reiniciar el form, Se utiliza set para que el valor se limpie en el formulario ya que limpia los state
        // Que estan arriba nombrados y con valores por el value que esta en el html
        setNombre('')
        setPropietario('')
        setEmail('')
        setFecha('')
        setSintomas('')

    }

    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

            <p className="text-lg mt-5 text-center mb-10">
                Añade Pacientes y {''}
                <span className="text-indigo-600 font-bold ">Administralos</span>
            </p>

            <form 
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
            >
                { error &&  <Error>
                    <p>Todos los campos son obligatorios</p>
                    {/*Aqui podra poner varias lineas de codigo html, para qe sea utilizado por el componente */}
                    </Error>} {/*llamando al componente children para el evento del error*/}
                <div className="mb-5">
                    <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
                        Nombre Mascota
                    </label>
                    <input
                        id="mascota"
                        type="text"
                        placeholder="Nombre de la Mascota"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={nombre}
                        onChange={ (e) => setNombre(e.target.value) }
                    />  
                </div>

                <div className="mb-5">
                    <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">
                        Nombre Propietario
                    </label>
                    <input
                        id="propietario"
                        type="text"
                        placeholder="Nombre del Propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={propietario}
                        onChange={ (e) => setPropietario(e.target.value) }
                    />  
                </div>

                <div className="mb-5">
                    <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Email Contacto Propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={email}
                        onChange={ (e) => setEmail(e.target.value) }
                    />  
                </div>

                <div className="mb-5">
                    <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">
                        Alta
                    </label>
                    <input
                        id="alta"
                        type="date"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={fecha}
                        onChange={ (e) => setFecha(e.target.value) }
                    />  
                </div>

                <div className="mb-5">
                    <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
                        Síntomas
                    </label>
                    <textarea 
                        id="sintomas"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        placeholder="Describe los Síntomas"
                        value={sintomas}
                        onChange={ (e) => setSintomas(e.target.value) }
                    />
                </div>

                <input
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
                    value={ paciente.id ? 'Editar Paciente' : 'Agregar Paciente' } //Cambiarle el nombre al boton deendiendo de lo que va  a hacer, lo hace por medio de un if con ternarios
                />
            </form>
        </div>
    )
}

export default Formulario
