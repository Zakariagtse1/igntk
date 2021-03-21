/**
 * ###############################################################################################
 *  ____                                        _     _____              _             _
 * |  _ \  (_)  ___    ___    ___    _ __    __| |   |_   _| (_)   ___  | | __   ___  | |_   ___
 * | | | | | | / __|  / __|  / _ \  | '__|  / _` |     | |   | |  / __| | |/ /  / _ \ | __| / __|
 * | |_| | | | \__ \ | (__  | (_) | | |    | (_| |     | |   | | | (__  |   <  |  __/ | |_  \__ \
 * |____/  |_| |___/  \___|  \___/  |_|     \__,_|     |_|   |_|  \___| |_|\_\  \___|  \__| |___/
 *
 * ---------------------
 *      Quick Start
 * ---------------------
 *
 * 	> For detailed instructions, visit the GitHub repository and read the documentation:
 * 	https://github.com/eartharoid/DiscordTickets/wiki
 *
 * 	> IMPORTANT: Also edit the TOKEN in 'user/.env'
 *
 * ---------------------
 *       Support
 * ---------------------
 *
 * 	> Information: https://github.com/eartharoid/DiscordTickets/#readme
 * 	> Discord Support Server: https://go.eartharoid.me/discord
 * 	> Wiki: https://github.com/eartharoid/DiscordTickets/wiki
 *
 * ###############################################################################################
 */

module.exports = {
	prefix: '?',
	name: 'Ticket Bot',
	presences: [
		{
			activity: '?new',
			type: 'PLAYING'
		},
		{
			activity: 'with tickets',
			type: 'PLAYING'
		},
		{
			activity: 'for new tickets',
			type: 'WATCHING'
		}
	],
	append_presence: ' | ?help',
	colour: '#42B024',
	err_colour: 'RED',
	cooldown: 3,
	guild: '766386748754231316', // ID of your guild (REQUIRED)
	staff_role: '813061307942961162', // ID of your Support Team role (REQUIRED)

	tickets: {
		category: '766667713497006133', // ID of your tickets category (REQUIRED)
		send_img: true,
		ping: 'everyone',
		text: `
		أهلا بك, {{ tag }}!
		سيقوم أحد الموظفين بمساعدتك قريبًا.
		في غضون ذلك ، يرجى وصف مشكلتك بأكبر قدر ممكن من التفاصيل! :)`,
		pin: false,
		max: 3,
		default_topic: {
			command: 'ليسه هوناك اي عنوان',
			panel: 'Created from panel'
		}
	},

	commands: {
		close: {
			confirmation: true,
			send_transcripts: true
		},
		delete: {
			confirmation: true
		},
		new: {
			enabled: true
		},
		closeall: {
			enabled: true,
		},
	},

	transcripts: {
		text: {
			enabled: false,
			keep_for: 90,
		},
		web: {
			enabled: false,
			server: 'https://tickets.example.com',
		},
		channel: '' // ID of your archives channel
	},

	panel: {
		title: 'هنا  لو عندك اي مشكله مع احد او اي سؤال او اي شي ثاني',
		description: ' لإنشاء تكت اضغط علا  📩',
		reaction: '📩'
	},

	storage: {
		type: 'sqlite'
	},

	logs: {
		files: {
			enabled: true,
			keep_for: 7
		},
		discord: {
			enabled: true,
			channel: '817730634285449256' // ID of your log channel
		}
	},

	debug: false,
	updater: true
};
