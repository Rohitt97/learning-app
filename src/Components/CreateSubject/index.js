import { faker } from '@faker-js/faker';

export const subjectName = ["hindi", "english", "maths", "science", "social science", "sanskrit", "coading", "programming", "physic"]

export default function CreateSubject(length) {
    const subjectArray = []
    for (let i = 0; i <= length; i++) {
        let subjectData = {
            id: i + 1,
            title: subjectName[i],
            description: faker.lorem.sentence(9),
        }
        subjectArray.push(subjectData)
    }
    return subjectArray;
}