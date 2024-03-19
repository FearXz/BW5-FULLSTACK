import { useEffect } from "react";
import { fetchListaAnimali } from "../../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ElencoAnimali = () => {
const dispatch = useDispatch();
    const animali = useSelector(state => state.animale.listaAnimali);



    useEffect(() => {
		dispatch(fetchListaAnimali());
	}, []);


  return (
    <div>
      <h1>Elenco Animali</h1>
      <ul className="text-center">
        {animali && animali.map((item) => (
          <li className="my-3 border"  key={item.animale.idAnimale}>
            {item.animale.nome} 
            <Link className="btn btn-warning mx-4" to={`/animale/edit/${item.animale.idAnimale}`}>Modifica</Link>
          </li>
        ))}

      </ul>
    </div>
  );
}