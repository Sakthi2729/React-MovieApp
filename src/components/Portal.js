import { Outlet } from 'react-router-dom'
import {Topbar} from './Topbar'

export function Portal(){
    return(
        <div className='portal'>
            <Topbar />
            <Outlet />
        </div>
    )
}