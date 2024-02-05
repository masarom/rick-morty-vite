import PropTypes from 'prop-types';
import './CharactersList.scss';
import CharacterCard from '../characterCard/CharacterCard';
import defaultImg from '../../assets/images/default-object.jpg';
import Pagination from '../pagination/Pagination';

const CharactersList = ({ characters, isLoading, currentPage, goToPreviousPage, goToNextPage }) => {
  // add loading message before fetch
  if (isLoading) {
    return <p className='character__error-msg'>Loading...</p>;
  } else {
    //sort alphabetically before map
    const charactersLi = characters
      .sort(function (a, b) {
        if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
        if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
        return 0;
      })
      .map((eachCharacter) => (
        <li className='character__card' key={eachCharacter.id}>
          <CharacterCard eachCharacter={eachCharacter} />
        </li>
      ));
    //add an error msg in case the filter returns 0
    const filterErrorMsg = () => {
      return (
        <div className='character__error'>
          <p className='character__error-msg'>Sorry, we weren&apos;t able to find what you&apos;re looking for :(</p>
          <p className='character__error-msg'>Try again!</p>
        </div>
      );
    };
    return (
      <>
        <Pagination currentPage={currentPage} goToPreviousPage={goToPreviousPage} goToNextPage={goToNextPage} />
        <ul className='character__list'>{characters.length === 0 ? filterErrorMsg() : charactersLi}</ul>
      </>
    );
  }
};

//defaultProps
CharactersList.defaultProps = {
  characters: [
    {
      episode: 0,
      id: 0,
      image: defaultImg,
      name: 'Character Name',
      origin: 'Planet of origin',
      species: 'Characters species',
      status: 'Dead',
    },
  ],
  isLoading: false,
};

//PropTypes
CharactersList.propTypes = {
  characters: PropTypes.array,
  isLoading: PropTypes.bool,
};

export default CharactersList;
