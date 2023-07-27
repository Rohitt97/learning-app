import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Users } from '../db';

export default function DropdownList() {
    const [inputValue, setInputValue] = React.useState('');

    return (
        <div>
            <Autocomplete
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue);
                }}
                id="controllable-states-demo"
                options={Users.map(user => user.firstName)}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="DropdownList" />}
            />
            <br />
            <div>{`Currently " ${inputValue} " is the active user`}</div>
        </div>
    );
}