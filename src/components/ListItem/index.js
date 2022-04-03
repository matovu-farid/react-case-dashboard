import propTypes from 'prop-types';
import {
  Button, ButtonGroup, ListItem, ListItemText,
} from '@mui/material';
import { Box } from '@mui/system';

const MyListItem = ({ name, functions }) => (
  <ListItem>
    <ListItemText sx={{ flexGrow: 1 }}>{name}</ListItemText>
    <Box my={1}>

      <ButtonGroup variant="contained">
        {
          Object.keys(functions).map((key) => (
            <Button key={key} onClick={functions[key]}>{key}</Button>

          ))
        }
      </ButtonGroup>
    </Box>
  </ListItem>
);
MyListItem.propTypes = {
  name: propTypes.string.isRequired,
  functions: propTypes.instanceOf(Object).isRequired,

};
export default MyListItem;
