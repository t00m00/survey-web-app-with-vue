FROM mcr.microsoft.com/devcontainers/javascript-node:1-20-bullseye

# Install additional packages
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install --no-install-recommends \
        python3 \
        python3-pip \
    && apt-get clean -y && rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /workspace

# Copy package files
COPY ../package*.json ./

# Install npm dependencies
# RUN npm install

# Create non-root user for development
# RUN groupadd --gid 1000 vscode \
#     && useradd --uid 1000 --gid vscode --shell /bin/bash --create-home vscode

# USER vscode