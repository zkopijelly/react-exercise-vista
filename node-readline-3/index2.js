import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import fs from 'node:fs/promises';

const DIARY_FILE = 'death-note.txt';

const rl = readline.createInterface({ input, output });

function getCurrentDateTime() {
    const now = new Date();
    return `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;
}

async function writeToDiary() {
    const entry = await rl.question('Enter your diary entry: ');
    const dateTime = getCurrentDateTime(); 
    const diaryEntry = `[${dateTime}] ${entry}\n`; 

    try {
        await fs.appendFile(DIARY_FILE, diaryEntry); 
        console.log('Diary entry saved successfully.');
    } catch (err) {
        console.error('Error writing to diary:', err);
    }
}

async function readDiary() {
    try {
        const data = await fs.readFile(DIARY_FILE, 'utf8');
        if (data) {
            console.log('\nYour diary entries:\n');
            console.log(data);
        } else {
            console.log('No diary entries found.');
        }
    } catch (err) {
        console.error('Error reading the diary:', err);
    }
}

async function askDiaryAction() {
    let validChoice = false;
    let answer;

    while (!validChoice) {
        answer = await rl.question('Do you want to (R)ead or (W)rite in your diary? ');

        if (answer.toUpperCase() === 'W') {
            validChoice = true;
            await writeToDiary(); 
        } else if (answer.toUpperCase() === 'R') {
            validChoice = true;
            await readDiary(); 
        } else {
            console.log('Invalid choice. Please choose "R" to read or "W" to write.');
        }
    }

    rl.close(); 
}

try {
    await askDiaryAction();
} catch (err) {
    console.error('An error occurred during the process:', err);
    rl.close();
}