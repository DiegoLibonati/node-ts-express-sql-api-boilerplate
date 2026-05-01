import { execSync } from "child_process";

export default (): void => {
  execSync("docker compose -f test.docker-compose.yml up -d --wait", {
    stdio: "inherit",
  });

  execSync("npx prisma db push --accept-data-loss", {
    stdio: "inherit",
    env: process.env,
  });
};
