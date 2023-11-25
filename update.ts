import { execSync } from "child_process";

execSync("cd ~/fanfundr-frontend", { stdio: "inherit" });
execSync("git pull", { stdio: "inherit" });
execSync("bun run build", { stdio: "inherit" });
execSync("bun run start", { stdio: "inherit" });
