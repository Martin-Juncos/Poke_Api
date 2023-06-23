import style from './SearchBar.module.css'
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {searchPoke} from '../../redux/actions.js';

export default function SearchBar() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');

    function handleInputChange(e){
        e.preventDefault();
        setName(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        dispatch(searchPoke(name));
        setName(''); 
    }

    return(
        <div >
            <input 
            className={style.input}
            onChange={(e) => handleInputChange(e)}
            type= 'text'
            placeholder='Ingresar nombre...'
            value= {name}
            />
            <button
            onClick={(e) => handleSubmit(e)}
            >Buscar
            </button>
        </div>
    )
}