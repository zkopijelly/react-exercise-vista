import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

async function isValidPassword(password) {
    const minLength = 6;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);

    return password.length >= minLength && hasUpperCase && hasLowerCase;
}

async function promptPassword() {
    try {
        const password = await rl.question('Enter a password: ');

        const valid = await isValidPassword(password);

        if (valid) {
            console.log('Password is valid!');
        } else {
            console.log('Invalid password! Password must be at least 6 characters long and contain both uppercase and lowercase letters.');
        }
    } catch (err) {
        console.error('Error:', err);
    } finally {
        rl.close();
    }
}

await promptPassword();