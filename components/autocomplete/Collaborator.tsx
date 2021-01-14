/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import CountriesController from './Countries';
import CollaboratorTypesController from './CollaboratorTypes';

const filter = createFilterOptions<CollaboratorType>();

// Not currently used
export default function CollaboratorController() {
  const [value, setValue] = React.useState<CollaboratorType | null>(null);
  const [open, toggleOpen] = React.useState(false);

  const handleClose = () => {
    setDialogValue({
      first_name: '',
      last_name: '',
      country_code: '',
      type_id: 0,
    });
    toggleOpen(false);
  };

  const [dialogValue, setDialogValue] = React.useState({
    first_name: '',
    last_name: '',
    country_code: '',
    type_id: 0,
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setValue({
      first_name: dialogValue.first_name,
      last_name: dialogValue.last_name,
      country_code: dialogValue.country_code,
      type_id: dialogValue.type_id,
    });
    handleClose();
  };

  return (
    <React.Fragment>
      <Autocomplete
        value={value}
        onChange={(_, newValue) => {
          if (typeof newValue === 'string') {
            // timeout to avoid instant validation of the dialog's form.
            setTimeout(() => {
              toggleOpen(true);
              setDialogValue({
                first_name: newValue,
                last_name: '',
                country_code: '',
                type_id: 0
              });
            });
          } else if (newValue && newValue.inputValue) {
            toggleOpen(true);
            setDialogValue({
              first_name: newValue.inputValue,
              last_name: '',
              country_code: '',
              type_id: 0
            });
          } else {
            setValue(newValue);
          }
        }}
        filterOptions={(options, params) => {
          const filtered = filter(options, params) as CollaboratorType[];

          if (params.inputValue !== '') {
            filtered.push({
              inputValue: params.inputValue,
              first_name: `Add "${params.inputValue}"`,
              last_name: '',
              country_code: '',
              type_id: 0
            });
          }

          return filtered;
        }}
        id="main_contact"
        options={collaborators}
        getOptionLabel={(option) => {
          // e.g value selected with enter, right from the input
          if (typeof option === 'string') {
            return option;
          }
          if (option.inputValue) {
            return option.inputValue;
          }
          return `${option.first_name} ${option.last_name}`;
        }}
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        renderOption={(option) => `${option.first_name} ${option.last_name}`}
        style={{ width: 300 }}
        freeSolo
        renderInput={(params) => (
          <TextField {...params} label="Main Contact" variant="outlined" />
        )}
      />
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <form onSubmit={handleSubmit}>
          <DialogTitle id="form-dialog-title">Add a new collaborator</DialogTitle>
          <DialogContent>
            <DialogContentText>
              The collaborator is not listed? Please, create it!
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="first_name"
              value={dialogValue.first_name}
              onChange={(event) => setDialogValue({ ...dialogValue, first_name: event.target.value })}
              label="First Name"
              type="text"
            />
            <TextField
              autoFocus
              margin="dense"
              id="last_name"
              value={dialogValue.last_name}
              onChange={(event) => setDialogValue({ ...dialogValue, last_name: event.target.value })}
              label="Last Name"
              type="text"
            />
            <CountriesController />
            <CollaboratorTypesController />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button type="submit" color="primary">
              Add
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </React.Fragment>
  );
}

interface CollaboratorType {
  inputValue?: string;
  first_name: string;
  last_name: string;
  country_code: string;
  type_id: number;
}

const collaborators: CollaboratorType[] = [
  { first_name: 'Oleksandra', last_name: 'Pishcheiko', country_code: 'UKR', type_id: 0 },
  { first_name: 'Juan', last_name: 'Negrier', country_code: 'CHL', type_id: 0 },
  { first_name: 'Marcelo', last_name: 'Negrier', country_code: 'CHL', type_id: 0 },
];
