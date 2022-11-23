import Navbar from "../components/Navbar";
import React, { useEffect, useState } from "react";


export default function CrudsEmpleado() {

    const [primerNombre, setPrimerNombre] = useState()
    const [segundoNombre, setSegundoNombre] = useState()
    const [primerApellido, setPrimerApellido] = useState()
    const [segundoApellido, setSegundoApellido] = useState()
    const [nDoc, setNdoc] = useState()
    const [fkArea, setFkArea] = useState()
    const [fkSubArea, setFkSubArea] = useState()
    const [fkTipoDoc, setFkTipoDoc] = useState()

    const [cmbArea, setCmbArea] = useState([])
    const [cmbSubArea, setCmbSubArea] = useState([])
    const [cmbTipoDoc, setCmbTipoDoc] = useState([])


    const handleName1 = ({target})=> setPrimerNombre(target.value);
    const handleName2 = ({target})=> setSegundoNombre(target.value);
    const handleLast1 = ({target})=> setPrimerApellido(target.value);
    const handleLast2 = ({target})=> setSegundoApellido(target.value);
    const handleDoc = ({target})=> setNdoc(target.value);
    const handleTipoDoc = ({target})=> setFkTipoDoc(target.value);
    const handleArea = ({target})=> {
        setFkArea(target.value)
        getSubAreas();
    };
    const handleSubArea = ({target})=> setFkSubArea(target.value);

    const url = 'http://localhost:4000/api/';

    const getAreas = async ()=>{
        const newUrl = url+'area'
        const response = await fetch(newUrl)
        const respJSON = await response.json()
        
        setCmbArea(respJSON)
    };

    const getSubAreas = async ()=>{
        const newUrl = url+'subarea/:'+fkArea;
        const response = await fetch(newUrl)
        const respJSON = await response.json()
        
        setCmbSubArea(respJSON)


        const cmb = document.getElementById('subarea');

        cmbSubArea.forEach((item)=>{
            console.log(item);
        })
    }

    const getTipoDocumentos =()=>{

    }


    useEffect(() => {
        getAreas();
        //getSubAreas();
    }, [])

    return (
        <>
            <Navbar brand="Empleado" />
            <div className="container">
                <div className="row">
                    <div className="card mt-3 col-lg-6 offset-lg-3 offset-md-1 col-md-10 offset-sm-0 col-sm-12">
                        <h3 className="mt-2">nuevo empleado</h3>
                        <form>
                            <div className="form-group mt-2">
                                <label for="nombre">Primer Nombre</label>
                                <input onChange={handleName1} type="text" className="form-control" id="nombre" />

                            </div>
                            <div className="form-group mt-2">
                                <label for="nombre2">Segundo Nombre</label>
                                <input onChange={handleName2} type="text" className="form-control" id="nombre2" />
                            </div>
                            <div className="form-group mt-2">
                                <label for="apellido">Primer Apellido</label>
                                <input onChange={handleLast1} type="text" className="form-control" id="apellido" />

                            </div>
                            <div className="form-group mt-2">
                                <label for="apellido2">Segundo Apellido</label>
                                <input onChange={handleLast2}  type="text" className="form-control" id="apellido2" />

                            </div>
                            <div className="form-group mt-2">
                                <label for="doc"># DOCUMENTO</label>
                                <input onChange={handleDoc}  type="text" className="form-control" id="doc" />

                            </div>
                            <div class="form-group mt-2">
                                <label for="tipoDoc">Seleccione Tipo de Documento</label>
                                <select defaultValue={fkTipoDoc} onChange={handleTipoDoc} class="form-control" id="tipoDoc">
                                    <option>1</option>
                                </select>
                            </div>
                            <div class="form-group mt-2">
                                <label for="area">Seleccione Area</label>
                                <select  onChange={handleArea} class="form-control" id="area">
                                    {
                                        cmbArea.map((item)=>{
                                            return(
                                                <option value={item.IDAREA}>{item.AREA}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <div class="form-group mt-2">
                                <label for="subarea">Seleccione Sub Area</label>
                                <select onChange={handleSubArea} class="form-control" id="subarea">
                                
                                </select>
                            </div>
                            <hr />
                            <button type="submit" className="btn btn-success mb-2 w-100">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}