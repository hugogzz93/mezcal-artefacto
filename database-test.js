const sqlite = require('sqlite')

async function setup() {

    try {
        const db = await sqlite.open({
            filename: 'db.sqlite',
            driver: sqlite.Database
        })
        console.log('hello', db)
        await db.migrate({force: 'last'})
    } catch(e) {
        console.log('something')
    }

}

setup();
