import propTypes from 'prop-types';
import {
  Button, ButtonGroup, ListItem, ListItemText,
} from '@mui/material';
import { Box } from '@mui/system';

const MyListItem = ({ name, onEdit, onRemove }) => (
  <ListItem>
    <ListItemText sx={{ flexGrow: 1 }}>{name}</ListItemText>
    <Box my={1}>

      <ButtonGroup variant="contained">
        <Button onClick={onRemove}>Remove</Button>
        <Button onClick={onEdit}>Edit</Button>
      </ButtonGroup>
    </Box>
  </ListItem>
);
MyListItem.propTypes = {
  name: propTypes.string.isRequired,
  onEdit: propTypes.func.isRequired,
  onRemove: propTypes.func.isRequired,
};
export default MyListItem;
