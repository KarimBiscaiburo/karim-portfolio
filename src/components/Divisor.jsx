import React from "react";
import "../sass/layout/_divisor.scss";

function Divisor ({porcentaje}) {
    return(
        <div className="divisor">
            <div className={`punto left-${porcentaje}`}></div>
        </div>
    )
}

export default Divisor;