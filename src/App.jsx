import { useState, useEffect } from 'react'
import Formulario from "./components/Formulario"
import Header from "./components/Header" //Importa el componente Header para que pueda ser utilizado desde el App (Componente Padre)
import ListadoPacientes from "./components/ListadoPacientes"

function App() {

  const [pacientes, setPacientes] = useState([]); //Creacion de un State - que Inicia con un arreglo vacio que se va a ir llenando cada vez que ingresen datos en el form
  const [paciente, setPaciente] = useState({}); //Creacion del State de Editar y Eliminar


  //Agregando el Local Storage para no perder los datos de stage
  //local storage solo puede guardar string
  useEffect(() => {
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? []; //Json.parce lo convierte en un objeto
      setPacientes(pacientesLS)
    }
    obtenerLS();
  }, []);


  //Sincroniza el state para el  local storage
  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify( pacientes ));
  }, [pacientes])


  //Eliminando paciente
  const eliminarPaciente = id => {
    const pacientesActualizados = pacientes.filter( paciente => paciente.id !== id);
    setPacientes(pacientesActualizados)
  }

  return (
    <div className="container mx-auto mt-20">
      <Header 
      //numeros={1} //Variables de los Props
      //isAdmin={true}
      
      />

      <div className="mt-12 md:flex">
          <Formulario 
            pacientes={pacientes} //Se pasan los valores del objeto al state
            setPacientes={setPacientes} //Se ve como props en la consola de react, traido del const de la funcion arriba, se trae desde el componente hijo Formulario
            paciente={paciente} //Hace que la informacion cargue en el formulario al darle al boton editar
            setPaciente={setPaciente} //Trae la informacion que se quiere modificar en el form.
          />
          <ListadoPacientes 
            pacientes={pacientes} //trae los props de los pacientes que ya estan en el arreglo
            setPaciente={setPaciente}
            eliminarPaciente={eliminarPaciente} //Eliminando el paciente
          />
      </div>

    </div>
  )
}

export default App
