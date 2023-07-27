import { faker } from '@faker-js/faker';
export let Users = [];
export let Subjects = [];
export let Topics = [];
export let flashCards = [];

let type = faker.lorem.word(1);
let value = faker.lorem.words(4);

for (let i = 0; i < 50; i++) {
    let id = i;
    let firstName = faker.person.firstName();
    let lastName = faker.person.lastName();
    let email = faker.internet.email();
    let password = faker.internet.password({ length: 5 });
    let isVerified = faker.datatype.boolean();
    Users.push({ id, firstName, lastName, email, password, isVerified });
}
console.log(Users);

for (let p = 0; p < 10; p++) {
    let id = p;
    let subName = faker.science.unit();
    let subjectTitle = faker.science.chemicalElement().name;
    let subjectDescription = faker.lorem.lines(1);
    Subjects.push({ id, subName, subjectTitle, subjectDescription });
}
console.log(Subjects)


for (let s = 0; s < 500; s++) {
    let id = s;
    let topicTitle = faker.lorem.sentence(2);
    let context = [{ type, value }];
    let subID = Subjects[Math.floor(Math.random() * Subjects.length)].id;
    Topics.push({ id, topicTitle, context, subID });
}
console.log(Topics);


for (let count = 0; count < 50; count++) {
    let title = faker.lorem.sentence(1);
    let description = faker.lorem.sentence(1);
    let image = faker.image.url();
    let topicId = Topics[Math.floor(Math.random() * Topics.length)].id;
    flashCards.push({ title, description, image, topicId });
}
console.log(flashCards);