import PropTypes from 'prop-types';
import { Input } from './Filter.styled';

const Filter = ({ value, onChange }) => {
  return (
    <label>
      Find contacts by name
      <Input type="text" name="filter" value={value} onChange={onChange} />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
