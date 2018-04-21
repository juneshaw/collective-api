const Table = require('./table')

const db = {
  init() {
    this.people = new Table()
    this.comments = new Table()
    this.meetings = new Table()
    this.messages = new Table()
    this.products = new Table()
    this.items = new Table()
    this.users = new Table()
    this.posts = new Table()
    this.comments = new Table()
    this.cameras = new Table()
    this.books = new Table()
  },
}

db.init()

require('./seeds/crm')(db)
require('./seeds/inbox')(db)
require('./seeds/shopping-cart')(db)
require('./seeds/users')(db)
require('./seeds/posts')(db)
require('./seeds/comments')(db)
require('./seeds/cameras')(db)
require('./seeds/books')(db)

module.exports = db
