#!/usr/bin/env node
import { DeveloperProfile } from "./developer-profile.js";
import { ProfileConsolePresenter } from "./profile-console-presenter.js";

const profile: DeveloperProfile = {
  name: "Antonio Manuel Díaz Moreno",
  profession: "Software developer",
  currentEmployer: "AIDA",
  githubName: "xenxi",
  linkedinName: "antonio-manuel-díaz-moreno",
  websiteUrl: "https://antoniomdm.dev/",
  consoleCommand: "amdiaz",
};
const formattedProfile = ProfileConsolePresenter.print(profile, {
  title: "xenxi",
});
console.log(formattedProfile);