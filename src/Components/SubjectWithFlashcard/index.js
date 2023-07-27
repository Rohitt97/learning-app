import React from 'react';
import { Box, Button, Card, CardContent, CardHeader, Typography } from '@mui/material';
import { flashcards, subjects, topics } from '../../database/db';

function getTopicsBySubjectID(id) {
    return topics.filter(topic => topic.subjectId === id);
}

function getFlashcardsByTopicIDs(ids) {
    return flashcards.filter(flashcard => ids.includes(flashcard.topicId))
}
function getTotalFlashcardsBySubjectID(id) {
    //get all topics
    let topicIDs = getTopicsBySubjectID(id).map(topic => topic.id);
    
    let flashcards = getFlashcardsByTopicIDs(topicIDs);
    

    return flashcards.length;
}
export default function SubjectWithFlashcard({ subject, onShow }) {
    return (
        <Card>
            <CardContent>
                <Typography variant='h5'>{subject.title}</Typography>
                <Typography variant="body1">{getTotalFlashcardsBySubjectID(subject.id)} flashcards</Typography>
                <Button onClick={() => onShow(subject)}>Show</Button>
            </CardContent>
        </Card>
    )
}