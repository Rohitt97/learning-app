import { faker } from '@faker-js/faker';

export function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const contextArray = [
    { type: "h1", value: faker.lorem.sentence(3) },
    { type: "h2", value: faker.lorem.sentence(3) },
    { type: "h3", value: faker.lorem.sentence(3) },
    { type: "h4", value: faker.lorem.sentence(3) },
    { type: "h5", value: faker.lorem.sentence(3) },
    { type: "h6", value: faker.lorem.sentence(3) },
    { type: "p", value: faker.lorem.sentence(8) },
    { type: "img", value: { src: "imgLink", alt: "img not loaded" } },
]



export default function CreateTopic(length) {
    const topicArray = []
    for (let i = 0; i <= length; i++) {
        let topicData = {
            id: i + 1,
            subjectId: getRandomNumber(1, 5),
            title: faker.lorem.sentence(1),
            context: [contextArray[getRandomNumber(0, 7)], contextArray[getRandomNumber(0, 7)]]
        }
        topicArray.push(topicData)
    }
    return topicArray;
}