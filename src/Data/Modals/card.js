import * as React from "react";
import { Subjects, Topics, Users } from '../db';
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Typography } from "@mui/material";


export let subject = Subjects[Math.floor(Math.random() * Subjects.length)];

export default function SubjectsWithFlashcardList() {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: "center",
        color: theme.palette.text.secondary,
    }));

    return (
        <>
            <Box sx={{ width: "100%" }} >
                <Grid container rowSpacing={5} columnSpacing={{ xs: 5, sm: 5, md: 5 }}>
                    <Grid item xs={7} md={3}>
                        <Item>
                            <Card sx={{ minWidth: 275 }}>
                                <CardContent>
                                    <Typography variant="h5" component="div">
                                        {Subjects[Math.floor(Math.random() * Subjects.length)].subjectTitle}
                                    </Typography>

                                    <Typography variant="body2">
                                        {Topics[Math.floor(Math.random() * Topics.length)]} flashcard
                                        <br />
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button variant="contained">Show</Button>
                                </CardActions>
                            </Card>
                        </Item>
                    </Grid>
                    <Grid item xs={7} md={3}>
                        <Item>
                            <Card sx={{ minWidth: 275 }}>
                                <CardContent>
                                    <Typography variant="h5" component="div">
                                        {Subjects[Math.floor(Math.random() * Subjects.length)].subjectTitle}
                                    </Typography>

                                    <Typography variant="body2">
                                        {Topics[Math.floor(Math.random() * Topics.length)].id} flashcard
                                        <br />
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button variant="contained">Show</Button>
                                </CardActions>
                            </Card>
                        </Item>
                    </Grid>
                    <Grid item xs={7} md={3}>
                        <Item>
                            <Card sx={{ minWidth: 275 }}>
                                <CardContent>
                                    <Typography variant="h5" component="div">
                                        {Subjects[Math.floor(Math.random() * Subjects.length)].subjectTitle}
                                    </Typography>

                                    <Typography variant="body2">
                                        {Topics[Math.floor(Math.random() * Topics.length)].id} flashcard
                                        <br />
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button variant="contained">Show</Button>
                                </CardActions>
                            </Card>
                        </Item>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}