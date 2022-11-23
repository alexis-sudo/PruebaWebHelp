export default function CardsEmpleado({ empleados }) {
    console.log(empleados)
    return (
        <>
            <div className="row">
                {empleados.map((item) => (
                    <div key={item.IDEMPLEADO} className="col mt-3">
                        <div className="card" style={{ minWidth: "200px" }}>
                            <div className="card-header">
                                <h5 className="card-title">EMPLEADO</h5>
                            </div>
                            <div className="card-body">

                                <p><strong>NOMBRE</strong>: {item.NOMBRES}</p>
                                <p><strong>APELLIDOS:</strong> {item.APELLIDOS}</p>
                                <p><strong>{item.DOCUMENTO}</strong> : {item.NDOCUMENTO}</p>
                                <p><strong>FECHA INGRESO:</strong> {item.FECHAINSERTO}</p>
                            </div>
                            <div className="card-footer">
                                <input type="Button" value="Ver Mas" className="btn btn-success" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}