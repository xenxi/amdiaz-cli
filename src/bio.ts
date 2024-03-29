#!/usr/bin/env node
import {
  printCard,
  DeveloperProfile,
  MenuOptions,
} from "bio-dev-card/dist/bio-printer.js";
import chalk from "chalk";
import { amdiazExperiences } from "./content/amdiaz-experience.js";

const profile: DeveloperProfile = {
  name: "Antonio Manuel Díaz Moreno",
  profession: "Software developer",
  currentEmployer: "AIDA",
  githubName: "xenxi",
  linkedinName: "antonio-manuel-díaz-moreno",
  websiteUrl: "https://antoniomdm.dev/",
  consoleCommand: "amdiaz",
  email: "antoniom.diaz.moreno@gmail.com",
  meetingUrl: "https://calendly.com/antoniom-diaz-moreno/30min",
  description:
    "I would like to become proficient in software development and ensure that I'm doing it right",
};

printCard(profile, {
  cardTitle: "👋 Hello world",
  menuOptions: new MenuOptions(
    "What's your code adventure, adventurer? Choose your destiny! 🧙‍"
  )
    .withSendMail({
      email: profile.email,
      options: {
        label: "📧 Send a digital carrier pigeon!",
        completionText:
          "All done! Your message is now speeding through the interwebs, ready to land in your inbox.",
      },
    })
    .withScheduleMeeting({
      meetingUrl: profile.meetingUrl,
      options: {
        label: "📅 Plan a coffee (or tea) talk!",
        completionText:
          "I'll see you at the meeting! Don't forget to bring your coffee (or tea)",
      },
    })
    .withCustom({
      label: "👀 Take a peek at my work wizardry!",
      completionText: "Code completed with flying colors!",
      action: printExperiences,
    })
    .withCustom({
      label: "🎩 Behind the Scenes: Code Conjurer",
      completionText: "May the code be with you",
      action: printAboutMe,
    })
    .withExit({
      label: "👋 Goodbye, world...",
      completionText:
        "Wishing you a debugging-free day. See you in the next coding adventure!",
    }),
});
function printAboutMe(): void {
  console.log("\n");
  console.log(
    "I am a senior software developer with a passion for technology and a focus on continuous improvement. I consider myself a flexible, optimistic, and creative person, with a constant desire to learn and overcome challenges. My goal is to apply my knowledge, experience, and skills to contribute to the success of projects in a motivating and rewarding environment. I have a strong background in web and mobile application development, as well as in the implementation of scalable architectures and clean design principles. Additionally, I am passionate about leading a balanced life, enjoying sports, family, friends, and overall happiness."
  );
  console.log("\n");
}
function printExperiences(): void {
  amdiazExperiences.forEach((experience) => {
    console.log("\n");
    console.log(
      chalk.bold.cyan(experience.company) +
        " - " +
        chalk.italic.cyan(experience.position)
    );
    console.log(
      chalk.italic(experience.startDate + " - " + experience.endDate)
    );
    experience.responsibilities.forEach((responsibility) => {
      console.log("   - " + responsibility);
    });
    console.log(
      chalk.bold("Tecnologías y metodologías: ") +
        experience.technologies.map((x) => chalk.green(x)).join(", ")
    );
  });
  console.log("\n");
}
