<h1 align="center">Template front of Oroneta Project</h1>
<br>
<br>

<p align="center">
  <i>Client side </i>
</p>

<p align="center">
  <a href="./CONTRIBUTING.md">Contributing</a>
  ·
  <a href="https://github.com/oroneta/drone-front/issues">Issues</a>
</p>

<p align="center">
  <a href="https://opensource.org/">
    <img src="https://img.shields.io/badge/License-Apache2.0-blue.svg" alt="Project License" />
  </a>&nbsp;
  <a>
    <img src="https://img.shields.io/badge/version-0.1-brightgreen" alt="Version" />
  </a>
</p>

<hr>

## Table of Contents

- [Introduction](#introduction)
- [Examples](#examples)
- [Installation](#installation)
- [Execution](#execution)
- [Testing](#testing)

## Introduction

This is the front-end of the Oroneta project. This project is a web application that allows you to manage drones, routes, and registrants. This project is part of the Oroneta project, which is a project that aims to create a drone delivery system.

## Examples

Sign in page:

![Sign in page](./doc/img/signIn.png)

Sign up page:

![Sign up page](./doc/img/signUp.png)

Dashboard page:

![Dashboard page](./doc/img/dashboard.png)

![Alarm page](./doc/img/alarm.png)

Drones page:

![Drones page](./doc/img/drones.png)

Map page:

![Routes page](./doc/img/map.png)

![Routes page](./doc/img/map2.png)

Profile page:

![Profile page](./doc/img/profile.png)

![Profile page](./doc/img/profile2.png)

Company page:

![Company page](./doc/img/company.png)

Billing page:

![Billing page](./doc/img/billing.png)


## Installation

To install the project, you need to clone the repository and install the dependencies. You can do this by running the following commands:

```bash
git clone https://github.com/oroneta/drone-front.git
cd drone-front
```

## Execution

To run the project as prod, you need to run the following command:

```bash
cd docker
docker compose up -d --build
```

If you want to run the project as dev, you need to modify the `./docker/.env` file and set:

```conf
SERVER_ENV = pro # Or set to dev
```

And then run the following command:

```bash
cd docker
docker compose up -d --build --force-recreate --remove-orphans
```

## Testing

Access to `localhost:80` or `localhost` to see the project running.

```bash
nc -zv localhost 80
```


## License

This project is licensed under the Apache 2.0 License - see the [LICENSE](./LICENSE) file for details.

Any of this project's code can be used for non-commercial purposes. Any other use must be approved by the project owner.

All rights reserved to Oroneta Project.
