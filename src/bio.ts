#!/usr/bin/env node
import { DeveloperProfile } from "./developer-profile.js";
import { ProfileConsolePresenter } from "./profile-console-presenter.js";
import { PromptMenu } from "./prompt-menu.js";

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
  meetingUrl: "https://calendly.com/antoniom-diaz-moreno/30min",
};
const formattedProfile = ProfileConsolePresenter.print(profile, {
  title: "👋 Hello world",
});
console.log(formattedProfile);

const menu = new PromptMenu(profile);
await menu.show();
