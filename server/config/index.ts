import env from "env-var";
import { config as dotenvConfig } from "dotenv";
import { resolve } from "path";

export interface Config {
  auth: {
    jwt: {
      cookieName: string;
      secret: string;
    };
  };
  backend: {
    host: string;
    port: number;
  };
  mode: "development" | "production";
  paths: {
    root: string;
  };
  seed: {
    adminUser: {
      email: string;
      password: string;
    };
  };
  web: {
    host: string;
    port: number;
  };
}

const mode = process.env.NODE_ENV || "development";
const rootPath = resolve(__dirname, "../..").replace("/dist", "");
dotenvConfig({ path: `${rootPath}/.env` });

export const config = {
  auth: {
    jwt: {
      cookieName: env.get("AUTH_JWT_COOKIE_NAME").default("cortex5-auth").asString(),
      secret: env.get("AUTH_JWT_SECRET").default("supersecret").asString(),
    },
  },
  backend: {
    host: env.get("BACKEND_HOST").default("localhost").asString(),
    port: env.get("BACKEND_PORT").default("4000").asPortNumber(),
  },
  mode,
  paths: {
    root: rootPath,
  },
  seed: {
    adminUser: {
      email: env.get("SEED_ADMIN_USER_EMAIL").default("pascal@lewebsimple.ca").asString(),
      password: env.get("SEED_ADMIN_USER_PASSWORD").default("changeme").asString(),
    },
  },
  web: {
    host: env.get("WEB_HOST").default("localhost").asString(),
    port: env.get("WEB_PORT").default("3000").asPortNumber(),
  },
};