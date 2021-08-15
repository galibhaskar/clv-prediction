import { UserMode } from "../concerns/UserMode";

const NavConfig = [
  {
    key: "Home",
    path: "Home",
    displayName: "Home",
    hideInUserMode: null,
  },
  {
    key: "About",
    path: "About",
    displayName: "About",
    hideInUserMode: null,
  },
  {
    key: "Features",
    path: "Features",
    displayName: "Features",
    hideInUserMode: null,
  },
  {
    key: "Analysis",
    path: "Analysis",
    displayName: "Analysis",
    hideInUserMode: UserMode.User,
  },
  {
    key: "TechStack",
    path: "TechStack",
    displayName: "TechStack",
    hideInUserMode: null,
  },
  {
    key: "Team",
    path: "Team",
    displayName: "Team",
    hideInUserMode: null,
  },
  {
    key: "Demo",
    path: "Demo",
    displayName: "Demo",
    hideInUserMode: null,
  },
];

export default NavConfig;
