FROM oven/bun:latest
WORKDIR /usr/src/app

COPY package.json bun.lock ./
RUN bun install --frozen-lockfile --production --ignore-scripts

COPY . .

CMD ["bun", "run", "start"]
