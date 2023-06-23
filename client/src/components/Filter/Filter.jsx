import { useDispatch, useSelector } from "react-redux";
import style from './Filter.module.css'
import { filterCreated, filterTypes } from '../../redux/actions'

export default function Filter() {
    const dispatch = useDispatch()
    const types = useSelector(state => state.allTypes)

    const handlerOptionCreated = (value) => {
         dispatch( filterCreated(value))            
    }

    const handlerOptionTypes = (type) => {
        dispatch(filterTypes(type))
    }

    return (
        <div className={style.container} >
            <div>
            <label htmlFor="created">Filter by created: </label>
            <select name="created" id="created" onChange={(e) => handlerOptionCreated(e.target.value)}>
                <option value="All">ALL</option>
                <option value='Bdd'>BDD</option> 
                <option value='Api'>API</option>               
            </select>
            </div>
            <div>
            <label htmlFor="types">Filter by types: </label>
                <select name="types" id="types" onChange={(e) => handlerOptionTypes(e.target.value)}>
                    {
                        types.map((type) => <option key={type.id} value={type.name}>{type.name}</option>)
                    }
                </select>
            </div>
        </div>
    )
}