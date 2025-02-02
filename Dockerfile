FROM node:latest AS builder

WORKDIR /app
COPY package.json ./

RUN npm install --legacy-peer-deps

COPY . .

# Build aplikasi
RUN npm run build


FROM node:latest

LABEL maintainer="Dreamsking <robyrosa012@gmail.com>"

WORKDIR /app
# Salin hasil build dari tahap sebelumnya
COPY --from=builder /app /app

# Install dependencies untuk runtime (produksi) tanpa menginstal dependensi dev
RUN npm install --production --legacy-peer-deps
EXPOSE 3000

CMD ["npm", "start"]