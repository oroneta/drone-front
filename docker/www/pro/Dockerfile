# Build React Website
FROM node:20.11.1 as build

WORKDIR /app

# Solve Error: error:0308010C:digital envelope routines::unsupported
# https://stackoverflow.com/questions/69692842/error-message-error0308010cdigital-envelope-routinesunsupported
ENV NODE_OPTIONS=--openssl-legacy-provider

# Copy source to build
COPY ./src ./

# Install all dependencies
RUN npm install
RUN npm run build


# ---------------------------------


# Production
FROM php:8.0.0-apache
ARG DEBIAN_FRONTEND=noninteractive

WORKDIR /var/www/html

# Remove old
RUN rm -rf ./*

# Copy from react buld to production server
COPY --from=build /app/build /var/www/html

COPY ./www .

RUN docker-php-ext-install pdo
RUN docker-php-ext-install pdo_mysql

# Include alternative DB driver
# RUN docker-php-ext-install mysqli


RUN apt-get update \
    && apt-get install -y sendmail libpng-dev \
    && apt-get install -y libzip-dev \
    && apt-get install -y zlib1g-dev \
    && apt-get install -y libonig-dev \
    && rm -rf /var/lib/apt/lists/* \
    && docker-php-ext-install zip





RUN docker-php-ext-install mbstring
RUN docker-php-ext-install zip
RUN docker-php-ext-install gd

RUN a2enmod rewrite

