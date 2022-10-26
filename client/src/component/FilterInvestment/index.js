const FilterInvestment = ( props ) => {

    const onChangeValue = (e) => {
        // console.log(e.target.value);
        props.filterSelected(e.target.value);
    }

    // console.log(props);

    return(
        <div className="ctn_filter">
            <span>Filter by:</span>
            <select className="filter" name="filterActive" onChange={onChangeValue}>
                <option value="all">All</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
            </select>
        </div>
    )
}

export default FilterInvestment;