import Filter from '../Filter/Filter'
import Sorter from '../Sorter/Sorter'
import style from './Aside.module.css'

export default function Aside() {
    return (
        <div className={style.container} >
            <Filter/>
            <Sorter/>
        </div>

    )
}