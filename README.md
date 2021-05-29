<div align="center">


<img src="./frontend/public/logo512.png" width=250 height=250>

# CHAT<span>.</span>IO


<!-- ![Issues](https://img.shields.io/github/issues/blackphoenix42/chat-app)
![Pull Requests](https://img.shields.io/github/issues-pr/blackphoenix42/chat-app)
![Forks](https://img.shields.io/github/forks/blackphoenix42/chat-app)
![Stars](https://img.shields.io/github/stars/blackphoenix42/chat-app)
[![License](https://img.shields.io/github/license/blackphoenix42/chat-app)](https://github.com/blackphoenix42/chat-app/blob/master/LICENSE) -->

![forthebadge](https://forthebadge.com/images/badges/powered-by-water.svg)
![forthebadge](https://forthebadge.com/images/badges/60-percent-of-the-time-works-every-time.svg)
![forthebadge](https://forthebadge.com/images/badges/not-a-bug-a-feature.svg)

</div>

# 📃 About

A chat app where users can send messages to each other. This project’s backend and frontend has an authentication system. It achieves real-time communication using `socket.io` and has many amazing features. 

### Few Awesome Features 🕹

- Send and receive messages in real-time 📧
<div align="center"><img src="./.github/assets/chat.gif" ></div>

- Update Profile 👨🏻‍🏫
<div align="center"><img src="./.github/assets/updateProfile.gif" ></div>

- Upload and send files 📁
<div align="center"><img src="./.github/assets/sendFile.gif" ></div>
  

# 🌱 Quick Start

- Star🌟 and Fork<img width="15px" src="https://img.icons8.com/doodle/48/000000/code-fork.png"/> this repository

- Clone this repository remotely.

```sh
git clone https://github.com/blackphoenix42/chat-app.git`
```

### Backend 🌐

- Download and install [PostgreSQL](https://www.postgresql.org/download/)🐘

- Navigate to backend directory

```sh
cd .\backend\
```

- Install the dependencies

```sh
npm install
```

- Add PostgresSQL databse password in `.env.EXAMPLE` file and remove `.EXAMPLE` from the extension.

- Create `chat_app` database in pgAdmin. (You can provide a different name but change it too in the `.env` file.)

- In the terminal, run the following command to create tables in database

```sh
npx sequelize-cli db:migrate
```

- Send dummy data to the database.

```sh
npx sequelize-cli db:seed:all
```

- Start the server

```sh
npm start
```

### Frontend 💻

- Navigate to frontend directory

```sh
cd .\frontend\
```

- Install the dependencies

```sh
npm install
```

- Start the app

```sh
npm start
```

<div align="center"><img width=35%" src="https://i.giphy.com/media/wABP9NJXf4LEssRZ2s/giphy.webp" ></div>

# 🔑Credentials

Use following credentials to try out the app.

```
email:john.doe@gmail.com
password:secret
```

# 📚 Technology Stack

- React
- Nodejs
- Express
- PostgreSQL

## 🚀 How to Contribute to Chat-App?

- Take a look at the Existing [Issues](https://github.com/blackphoenix42/chat-app/issues) or create your own Issues!
- Check out [CONTRIBUTING.md](./CONTRIBUTING.md)
- Start contributing to add yourself in README.md 🤙🏻

<div align="center"><img width="35%" src="https://media.giphy.com/media/mCRJDo24UvJMA/giphy.gif" ></div>

## 👾 Project Admin

<table>
	<tr>
		<td align="center">
			<a href="https://github.com/blackphoenix42">
				<img src="https://avatars.githubusercontent.com/u/22915654?v=4" width="100px" alt="" />
				<br /> <sub><b>blackphoenix42</b></sub>
			</a>
			<br /> <a href="https://github.com/blackphoenix42"> 
		👑 Admin
	    </a>
		</td>
	</tr>
</table>

<!-- ## 🌟 Contributors

<table>
	<tr>
		<td>
			contrib.rocks
			</a>
		</td>
	</tr>
</table> -->
