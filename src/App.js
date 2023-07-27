import React from 'react';
import SubjectsWithFlashcardList from './Data/Modals/card';
import DropdownList from './Data/Modals/dropdown';

export default function App() {
  return (
    <React.Fragment>
      <DropdownList />
      <SubjectsWithFlashcardList />
    </React.Fragment>
  )
}