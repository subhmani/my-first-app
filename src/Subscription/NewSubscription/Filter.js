import './Filter.css'
const Filter=(props)=>{
    const onSelectHandler=(events)=>{
        console.log('onSelect Handler',events.target.value)
        props.onFilterChange(events.target.value)
    }
    return(
        <div className='filter'>
            <div className='filter_control'>
                <label>Filter by Year</label>
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