import './Filters.scss';

const FilterByName = ({handleFilter, filters, uniqueSpecies, uniqueOrigin }) => {
  //handle inputs filter
  const handleFilters = (ev) => {
    ev.preventDefault();
    handleFilter(ev.target.name, ev.target.value);
  };

  //render species select options
  const renderSpeciesSelect = () => {
    return uniqueSpecies.map((eachSpecies, i) => (
      <option key={i} value={eachSpecies}>
        {eachSpecies}
      </option>
    ));
  };

  // render origin select options
  const renderOriginSelect = () => {
    return uniqueOrigin.map((eachOrigin, i) => (
      <option key={i} value={eachOrigin}>
        {eachOrigin}
      </option>
    ));
  };

  // prevent send form with Enter
  const handleOnSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <form className='form__filter' onSubmit={handleOnSubmit}>
      <input
        type='text'
        className='form__filter--name'
        name='name'
        placeholder='Search by name'
        value={filters.name}
        onInput={handleFilters}
      />
      <select
        className='form__filter--species'
        name='species'
        id='species'
        defaultValue='default'
        onChange={handleFilters}
      >
        <option hidden disabled value='default'>
          Search by species
        </option>
        {renderSpeciesSelect()}
      </select>
      <select
        className='form__filter--species'
        name='origin'
        id='origin'
        defaultValue='default'
        onChange={handleFilters}
      >
        <option hidden disabled value='default'>
          Search by origin
        </option>
        {renderOriginSelect()}
      </select>
    </form>
  );
};

export default FilterByName;
