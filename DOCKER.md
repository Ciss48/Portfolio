# Docker Setup for Portfolio

This guide explains how to run the portfolio application using Docker.

## Prerequisites

- Docker installed on your machine ([Install Docker](https://docs.docker.com/get-docker/))
- Docker Compose (usually included with Docker Desktop)

## Quick Start

### Option 1: Using Docker Compose (Recommended)

```bash
# Build and start the container
docker-compose up --build

# Or run in detached mode (background)
docker-compose up -d --build

# Stop the container
docker-compose down
```

The application will be available at `http://localhost:3000`

### Option 2: Using Docker Commands

```bash
# Build the Docker image
docker build -t portfolio-app .

# Run the container
docker run -p 3000:3000 portfolio-app

# Or run in detached mode
docker run -d -p 3000:3000 --name portfolio portfolio-app
```

## Commands Reference

### Docker Compose

```bash
# Build and start
docker-compose up --build

# Start in background
docker-compose up -d

# Stop containers
docker-compose down

# View logs
docker-compose logs -f

# Rebuild without cache
docker-compose build --no-cache
```

### Docker Commands

```bash
# Build image
docker build -t portfolio-app .

# Run container
docker run -p 3000:3000 portfolio-app

# Run in background
docker run -d -p 3000:3000 --name portfolio portfolio-app

# View logs
docker logs -f portfolio

# Stop container
docker stop portfolio

# Remove container
docker rm portfolio

# Remove image
docker rmi portfolio-app
```

## Running on Different Machines

### On Another Machine

1. **Copy the project files** (or clone from GitHub)
2. **Make sure Docker is installed**
3. **Run the container:**
   ```bash
   docker-compose up --build
   ```
4. **Access the app** at `http://localhost:3000` (or the machine's IP address)

### On a Remote Server

1. **SSH into the server**
2. **Clone your repository:**
   ```bash
   git clone https://github.com/Ciss48/Portfolio.git
   cd Portfolio
   ```
3. **Run with Docker Compose:**
   ```bash
   docker-compose up -d --build
   ```
4. **Access via server IP** (make sure port 3000 is open in firewall)

## Troubleshooting

### Port Already in Use

If port 3000 is already in use, change it in `docker-compose.yml`:

```yaml
ports:
  - "3001:3000"  # Use 3001 on host, 3000 in container
```

### Rebuild After Changes

```bash
# Stop containers
docker-compose down

# Rebuild and start
docker-compose up --build
```

### View Container Logs

```bash
# Docker Compose
docker-compose logs -f

# Docker
docker logs -f portfolio
```

## Image Size

The multi-stage build creates an optimized image (~150-200MB) by:
- Using Alpine Linux (minimal base image)
- Only including production dependencies
- Using Next.js standalone output

## Security

- The container runs as a non-root user (`nextjs`)
- Only production dependencies are included
- Minimal attack surface with Alpine Linux

