const Filter = ({filterSearch, onChange}) => {
    return (
        <div>
        <p>Filter contact:  </p>
        <input
          value={filterSearch}
          onChange={onChange}
        />
      </div>
    )
}

export default Filter