var libnotify = require('./lib/libnotify')

libnotify.notify('Hello from node.js libnotify !')
libnotify.notify('Yep, 5 mails', { title: "Thunderbird", time: 2, image: 'notification-message-email'})
libnotify.notify('Now playing: Mr. Hudson - Supernova', { title: 'Banshee', image: "path/to/banshee/icon.png"})