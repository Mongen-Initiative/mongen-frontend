/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import getCollaboratorTypes from '../../data/CollaboratorTypes';

const filter = createFilterOptions<CollaboratorType>();

export default function CollaboratorTypesController() {
  const { loading, noData, collaborator_types } = getCollaboratorTypes()
  const [value, setValue] = React.useState<CollaboratorType | null>(null);

  if (noData) {
    return (
      <></>
    )
  } else {
    return (
      <div>
        {" "}
        {loading ? (
          "Loading collaborator types ..."
        ) : (
            <React.Fragment>
              <Autocomplete
                value={value}
                onChange={(_, newValue) => {
                  if (typeof newValue === 'string') {
                    // timeout to avoid instant validation of the dialog's form.
                    setTimeout(() => { });
                  } else if (newValue && newValue.inputValue) {
                    setValue(newValue);
                  } else {
                    setValue(newValue);
                  }
                }}
                filterOptions={(options, params) => {
                  const filtered = filter(options, params) as CollaboratorType[];

                  return filtered;
                }}
                id="collaborator_types"
                options={collaborator_types}
                getOptionLabel={(option) => {
                  // e.g value selected with enter, right from the input
                  if (typeof option === 'string') {
                    return option;
                  }
                  if (option.inputValue) {
                    return option.inputValue;
                  }
                  return option.name;
                }}
                selectOnFocus
                clearOnBlur
                handleHomeEndKeys
                renderOption={(option) => option.name}
                style={{ width: 300 }}
                freeSolo
                renderInput={(params) => (
                  <TextField {...params} label="Select a collaborator type from the list" variant="outlined" />
                )}
              />
            </React.Fragment>
          )}{" "}
      </div>
    );
  }
}

interface CollaboratorType {
  inputValue?: string
  id: number
  name: string
}
