import { getRandomNumber } from "../CreateTopic";
import { faker } from "@faker-js/faker";

export default function CreateFlashcard(length) {
  const flashcardArray = [];
  for (let i = 0; i <= length; i++) {
    let flashcardData = {
      id: i + 1,
      topicId: getRandomNumber(1, 50),
      title: faker.lorem.sentence(2),
      description: faker.lorem.sentence(9),
    };
    flashcardArray.push(flashcardData);
  }
  return flashcardArray;
}
