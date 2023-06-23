import { Link } from 'react-router-dom'
import style from './Nav.module.css'

export default function Nav() {
    return (
        <div className={style.container}>
            
            <Link to='/home' >
            <button>Home</button>
            </Link>
            <Link to='/create' >
            <button>Crear Poke</button>
            </Link>
        </div>
    )
}