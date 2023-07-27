import React from 'react';
import { Grid } from '@mui/material';

import SubjectWithFlashcard from '../SubjectWithFlashcard';

export default function SubjectWithFlashcardList({ subjects }) {

    return (
        <Grid container spacing={2}>
            {
                subjects.map(subject => (
                    <Grid item xs={4}>
                        <SubjectWithFlashcard subject={subject} onShow={(subjectObj) => console.log("onShow called with : ", subjectObj)} />
                    </Grid>
                ))
            }
        </Grid>
    )
}