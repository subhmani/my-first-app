import { useEffect, useState } from 'react'
import './Filter.css'
import useTime from '../../hooks/time';
const Filter=(props)=>{
    //const[currentTime,setCurrentTime]=useState('');
    const currentTime=useTime(5000)
    /* useEffect(()=>{
        const interval=setInterval(()=>{
                setCurrentTime(new Date().toLocaleString())
        },10000)
        return ()=>clearInterval(interval)
    },[]) */
    
    const onSelectHandler=(events)=>{
        console.log('onSelect Handler',events.target.value)
        props.onFilterChange(events.target.value)
    }
    return(
        <div className='filter'>
            <div className='filter_control'>
                <label>Filter by Year</label>
                <span className='filter-time'>{currentTime}</span>
                <select value={props.selectedFilter} onChange={onSelectHandler}>
                    <option value='2024'>2024</option>
                    <option value='2023'>2023</option>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                </select>

            </div>

        </div>
    )
}
export default Filter