#!/usr/bin/env node
import boxen from "boxen";
import chalk from "chalk";
import { DeveloperProfile } from "./developer-profile";

const profile: DeveloperProfile = {
  name: "Antonio Manuel Díaz Moreno",
  profession: "Software developer",
  currentEmployer: "AIDA",
  githubName: "xenxi",
  linkedinName: "antonio-manuel-díaz-moreno",
  websiteUrl: "https://antoniomdm.dev/",
  consoleCommand: "amdiaz",
};
const profileFormated = {
  name: chalk.bold.green(`             ${profile.name}`),
  work: `${chalk.white(`${profile.profession} at`)} ${chalk
    .hex("#2b82b2")
    .bold("AIDA")}`,
  github: chalk.gray("https://github.com/") + chalk.green(profile.githubName),
  linkedin:
    chalk.gray("https://linkedin.com/in/") + chalk.blue(profile.linkedinName),
  web: chalk.cyan(profile.websiteUrl),
  npx: `${chalk.red("npx")} ${chalk.white(profile.consoleCommand)}`,

  labelWork: chalk.white.bold("       Work:"),
  labelGitHub: chalk.white.bold("     GitHub:"),
  labelLinkedIn: chalk.white.bold("   LinkedIn:"),
  labelWeb: chalk.white.bold("        Web:"),
  labelCard: chalk.white.bold("       Card:"),
};

const text = [
  `${profileFormated.name}\n`,
  `${profileFormated.labelWork}  ${profileFormated.work}\n`,
  `${profileFormated.labelGitHub}  ${profileFormated.github}`,
  `${profileFormated.labelLinkedIn}  ${profileFormated.linkedin}`,
  `${profileFormated.labelWeb}  ${profileFormated.web}\n`,
  `${profileFormated.labelCard}  ${profileFormated.npx}\n`,
  `${chalk.italic(
    "I would like to become proficient in software development and ensure that I'm doing it right"
  )}`,
].join("\n");

printWithBoder({ text: text, title: "xenxi", profile });

function printWithBoder(params: {
  text: string;
  title: string;
  profile: DeveloperProfile;
}): void {
  console.log(
    boxen(params.text, {
      title: params.title,
      titleAlignment: "center",
      padding: 1,
      borderColor: "green",
      borderStyle: "single",
    })
  );
}
