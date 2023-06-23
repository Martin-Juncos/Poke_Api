import style from './LandingPage.module.css'
import { Link } from "react-router-dom";

export default function LandingPage() {
    return (
        <div className={style.container}>
            <h1>PókeApi</h1>
            <h3>Bienvenidos</h3>
            <Link to='/home' >
            <button>Home</button>
            </Link>
        </div>
    )
}