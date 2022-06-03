function Header() {// function Header({numeros,isAdmin}) Destructuring para traer los props especificos, numero y isadmin son traidos desde app.js
    
    //console.log(numeros)
    //console.log(isAdmin) //Mostrando los prop por consola
    return (
        <h1 className="font-black text-5xl text-center md:w-2/3 mx-auto">
            Seguimiento de Mascotas {""} 
            <span className="text-indigo-700">Veterinaria</span>
        </h1>
    )
}

export default Header;