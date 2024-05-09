# Build React Website
FROM node:20.11.1 as build

WORKDIR /app

# Solve Error: error:0308010C:digital envelope routines::unsupported
# https://stackoverflow.com/questions/69692842/error-message-error0308010cdigital-envelope-routinesunsupported
ENV NODE_OPTIONS="--openssl-legacy-provider --max-old-space-size=4096"

# Copy source to build
COPY ./src ./

# Install all dependencies
RUN npm install
CMD ["npm", "run", "start", "&&", "tail", "-f", "/dev/null"]