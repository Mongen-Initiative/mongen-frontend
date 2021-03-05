/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import getCountries from '../../data/Countries';

const filter = createFilterOptions<CountryType>();

type Props = {
  callback
  className
}

export default function CountriesController(props: Props) {
  const { callback, className } = props
  const { loading, noData, countries } = getCountries()
  const [value, setValue] = React.useState<CountryType | null>(null);

  if (noData) {
    return (
      <></>
    )
  } else {
    return (
      <div className={className}>
        {" "}
        {loading ? (
          "Loading countries..."
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
                    callback(newValue)
                  } else {
                    setValue(newValue);
                    if (newValue)
                      callback(newValue)
                  }
                }}
                filterOptions={(options, params) => {
                  const filtered = filter(options, params) as CountryType[];

                  return filtered;
                }}
                id="country"
                options={countries}
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
                  <TextField {...params} label="Select a country from the list *" variant="outlined" />
                )}
              />
            </React.Fragment>
          )}{" "}
      </div>
    );
  }
}

interface CountryType {
  inputValue?: string;
  countryISO: string
  countryISO3: string
  callingCode: string
  name: string
}
