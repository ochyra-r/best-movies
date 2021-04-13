const users = {
	"barrett": {
		"name": "Barrett Gardner",
		"avatar": "images/avatar/barrett.jpg",
		"event": "God will make you fertile.",
		"password": "secret"
	},
	"jasmine": {
		"name": "Jasmine Knowles",
		"avatar": "images/avatar/jasmine.jpg",
		"event": "A village with grazing land",
		"password": "qwerty"
	},
	"maxwell": {
		"name": "Maxwell Sherman",
		"avatar": "images/avatar/maxwell.jpg",
		"event": "Derived the name Virgil.",
		"password": "1234567"
	}
};

module.exports = (req, res, next) => {
	if (req.method === "POST") {
		if (req.path === "/login") {
			const username = req.body.username;
			const password = req.body.password;
			
			if (username in users && users[username].password === password) {
				const player = Object.assign({}, users[username]);
				delete player.password;
				res.status(200).json({
					status: "success",
					player
				});
			} else {
				res.status(400).json({
					status: "fail",
					error: "user does not exist or wrong password"
				});
				
			}
			
		} else if (req.path === "/logout") {
			var username = req.body.username;
			if (username in users) {
				res.status(200).json({
					status: "success"
				});
			} else {
				res.status(400).json({
					status: "fail",
					error: "Username do not match!"
				});
			}
		}
	} else {
		next()
	}
}
