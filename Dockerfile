FROM oven/bun AS builder

WORKDIR /app

COPY package.json bun.lockb ./
RUN bun install --frozen-lockfile

COPY . . 

RUN bun run build

FROM oven/bun:alpine AS runtime

LABEL maintainer="Dreamsking <robyrosa012@gmail.com>"

WORKDIR /app

COPY --from=builder /app/.next/standalone /app
COPY --from=builder /app/.next/static /app/.next/static

EXPOSE 3000

CMD ["bun", "server.js"]
