#!/usr/bin/env node
import { DeveloperProfile } from "./developer-profile.js";
import { ProfileConsolePresenter } from "./profile-console-presenter.js";
import inquirer, { Answers, QuestionCollection } from "inquirer";
import open from 'open'

console.clear();
const profile: DeveloperProfile = {
  name: "Antonio Manuel Díaz Moreno",
  profession: "Software developer",
  currentEmployer: "AIDA",
  githubName: "xenxi",
  linkedinName: "antonio-manuel-díaz-moreno",
  websiteUrl: "https://antoniomdm.dev/",
  consoleCommand: "amdiaz",
  email: "antoniom.diaz.moreno@gmail.com",
  meetingUrl: "https://calendly.com/antoniom-diaz-moreno/30min"
};
const formattedProfile = ProfileConsolePresenter.print(profile, {
  title: "👋 Hello world",
});
console.log(formattedProfile);

const prompt = inquirer.createPromptModule();
const choices: Answers[] = [
  {
    name: "📧 Send a digital carrier pigeon!",
    value: () => {
      open(`mailto:${profile.email}`);
      console.log(
        "\nAll done! Your message is now speeding through the interwebs, ready to land in your inbox.\n"
      );
    },
  },
  {
    name: "📅 Plan a coffee (or tea) talk!",
    value: () => {
      open(profile.meetingUrl);
      console.log("\nI'll see you at the meeting! Don't forget to bring your coffee (or tea) \n");
    },
  },
  {
    name: "👀 Take a peek at my work wizardry!",
    value: () => {
      console.log("\nThe elusive resume seems to have vanished, but fear not! It's a work in progress, so stay tuned and watch this space!\n");
    },
  },
  {
    name: "👋 Goodbye, world..",
    value: () => {
      console.log("\nWishing you a debugging-free day. See you in the next coding adventure!\n");
    },
  },
];
const questions: QuestionCollection = [
  {
    type: "list",
    name: "action",
    message: "What's your code adventure, adventurer? Choose your destiny! 🧙‍♂️ ",
    choices,
  },
];
prompt(questions).then((answer) => answer.action());
