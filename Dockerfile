# ---- Dependencies Stage ----
FROM node:20-alpine AS deps

# Set working directory
WORKDIR /app

# Install pnpm globally
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copy only package.json and pnpm-lock.yaml for better caching
COPY package.json pnpm-lock.yaml ./

# Install dependencies using pnpm
RUN pnpm install --frozen-lockfile

# ---- Build Stage ----
FROM node:20-alpine AS builder

WORKDIR /app

# Install pnpm in builder stage
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copy all files from project
COPY . .

# Copy installed dependencies from deps stage
COPY --from=deps /app/node_modules ./node_modules

# Build the Next.js application
RUN pnpm build

# ---- Production Stage ----
FROM node:20-alpine AS runner

WORKDIR /app

# Copy necessary files from builder stage
COPY --from=builder /app/.next/standalone ./

# Expose port 3000
EXPOSE 3000

ENV PORT=3000

# Start the Next.js application
CMD HOSTNAME='0.0.0.0' node server.js    