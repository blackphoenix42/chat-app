<div align="center">

![Issues](https://img.shields.io/github/issues/blackphoenix42/chat-app)
![Pull Requests](https://img.shields.io/github/issues-pr/blackphoenix42/chat-app)
![Forks](https://img.shields.io/github/forks/blackphoenix42/chat-app)
![Stars](https://img.shields.io/github/stars/blackphoenix42/chat-app)
[![License](https://img.shields.io/github/license/blackphoenix42/chat-app)](https://github.com/blackphoenix42/lane_detection_opencv/blob/master/LICENSE)

<img src="./frontend/public/logo512.png" width=250 height=250>

<h3>Join official <a href="https://discord.gg/mRUZEhD">Discord Server</a> for discussion.</h3>

![forthebadge](https://forthebadge.com/images/badges/contains-tasty-spaghetti-code.svg)
![forthebadge](https://forthebadge.com/images/badges/designed-in-ms-paint.svg)
![forthebadge](https://forthebadge.com/images/badges/it-works-why.svg)

</div>

# 🌱 Quick Start

- Star🌟 and Fork<img width="15px" src="https://img.icons8.com/doodle/48/000000/code-fork.png"/> this repository

- Clone this repository remotely.

```
git clone https://github.com/blackphoenix42/chat-app.git`
```

### Backend 🌐

- Download and install [PostgreSQL](https://www.postgresql.org/download/)🐘

- Navigate to backend directory

```
cd .\backend\
```

- Install the dependencies

```
npm install
```

- Add PostgresSQL databse password in `.env.EXAMPLE` file and remove `.EXAMPLE` from the extension.

- Create `chat_app` database in pgAdmin. (You can provide a different name but change it too in the `.env` file.)

- In the terminal, run the following command to create tables in database

```
npx sequelize-cli db:migrate
```

- Send dummy data to the database.

```
npx sequelize-cli db:seed:all
```

- Start the server

```
npm start
```

### Frontend 💻

- Navigate to frontend directory

```
cd .\frontend\
```

- Install the dependencies

```
npm install
```

- Start the app

```
npm start
```

<!-- <div align="center"><img width=25%" src="https://media.giphy.com/media/l41lUeeQfYfACcYjS/giphy.gif" ></div> -->

# ⚡ Technology Stack

- React
- Nodejs
- Express
- PostgreSQL

## 🚀 How to Contribute to Chat-App?

- Take a look at the Existing [Issues](https://github.com/blackphoenix/chat-app/issues) or create your own Issues!
- Check out [CONTRIBUTING.md](./CONTRIBUTING.md)
- Start contributing to get featured in README.md

<!-- <div align="center"><img width="25%" src="https://media.giphy.com/media/mCRJDo24UvJMA/giphy.gif" ></div> -->

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
