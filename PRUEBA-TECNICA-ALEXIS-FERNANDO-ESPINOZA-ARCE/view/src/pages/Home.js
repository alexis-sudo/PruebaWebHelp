import React, { useEffect, useState } from "react";
import CardsEmpleado from "../components/CardsEmpleado";
import Navbar from "../components/Navbar";

export default function Home() {
    const [empleados, setEmpleados] = useState([])

    const url = 'http://localhost:4000/api/empleado';
    const getEmpleados = async () => {
        const response = await fetch(url)
        const respJSON = await response.json()

        setEmpleados(respJSON)
    }

    useEffect(() => {
        getEmpleados()
    }, [])

    return (
        <>
            <Navbar brand="Empleados" />
            <div className="container">
                <CardsEmpleado empleados={empleados} />
            </div>
        </>
    )
}