import { useDispatch } from 'react-redux'
import style from './Sorter.module.css'
import { orderByName, orderByAttack } from '../../redux/actions'

export default function Sorter() {
    const dispatch = useDispatch()

    const hamdlerSortByName = (ordenName) => {
        dispatch(orderByName(ordenName))
    }

    const hamdlerSortByAttack = (ordenAttack) => {
        dispatch(orderByAttack(ordenAttack))
    }

    return (
        <div className={style.container} >
            <div>
            <label htmlFor="orderByName">Sort by Name </label>
            <select name="orderByName" id="orderByName" onChange={(e) => hamdlerSortByName(e.target.value)}>
                <option value="">Alf</option>
                <option value="a_z">a - z</option>
                <option value="z_a">z - a</option>
            </select>
            </div>
            <div>
            <label htmlFor="orderByAttack">Sort by Attack </label>
            <select name="orderByAttack" id="orderByAttack" onChange={(e) => hamdlerSortByAttack(e.target.value)}>
                <option value="">Force</option>
                <option value="menor">Menor</option>
                <option value="mayor">Mayor</option>
            </select>
            </div>
        </div>

    )
}