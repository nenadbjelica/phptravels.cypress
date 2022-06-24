import { faker } from '@faker-js/faker';

const signupData = {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    phone: faker.phone.number(),
    email: faker.internet.email(),
    password: faker.internet.password(),
}

const signupValidations = {
    signupSuccessfull: 'Signup successfull please login.',
    emailAlreadyExist: 'Email already exist!',
}

export { signupData, signupValidations }
