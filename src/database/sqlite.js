import * as SQLite from "expo-sqlite"

// Open the database
export const dbInit = () => {
  const db = SQLite.openDatabase("category.db")

  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS games (id VARCHAR PRIMARY KEY NOT NULL, game TEXT NOT NULL);`,
        [],
        () => {
          resolve()
        },
        (_, err) => {
          reject(err)
        }
      )
    })
  })
}

// Open a database for expenses.
export const dbInitExpenses = () => {
  const db = SQLite.openDatabase("expenses.db")

  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS expenses (id VARCHAR PRIMARY KEY NOT NULL, expense TEXT NOT NULL);`,
        [],
        () => {
          resolve()
        },
        (_, err) => {
          reject(err)
        }
      )
    })
  })
}

// Insert the expense title , amount and the tag into the database
export const dbInsertExpense = (id, expense) => {
  const db = SQLite.openDatabase("expenses.db")

  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `INSERT INTO expenses (id, expense) VALUES (?, ?);`,
        [id, expense],
        (_, result) => {
          resolve(result)
        },
        (_, err) => {
          reject(err)
        }
      )
    })
  })
}

// Get all the expenses from the database
export const dbGetExpenses = () => {
  const db = SQLite.openDatabase("expenses.db")

  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM expenses`,
        [],
        (_, result) => {
          const tasks = result.rows._array.map(item => {
            return { id: item.id, expense: item.expense }
          })
          resolve(tasks)
        },
        (_, err) => {
          reject(err)
        }
      )
    })
  })
}

// Insert a game into the database
export const dbGetGames = () => {
  const db = SQLite.openDatabase("category.db")

  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM games`,
        [],
        (_, result) => {
          const tasks = result.rows._array.map(item => {
            return { id: item.id, game: item.game }
          })
          resolve(tasks)
        },
        (_, err) => {
          reject(err)
        }
      )
    })
  })
}

// Insert a game into the database
export const dbInsert = (id, game) => {
  const db = SQLite.openDatabase("category.db")

  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `INSERT INTO games (id, game) VALUES (?, ?);`,
        [id, game],
        (_, result) => {
          resolve(result)
        },
        (_, err) => {
          reject(err)
        }
      )
    })
  })
}

// Delete a game from the database
export const dbDelete = id => {
  const db = SQLite.openDatabase("category.db")

  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `DELETE FROM games WHERE id = ?;`,
        [id],
        (_, result) => {
          resolve(result)
        },
        (_, err) => {
          reject(err)
        }
      )
    })
  })
}

// Dlete all games from the database
export const dbDeleteAll = () => {
  const db = SQLite.openDatabase("category.db")
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `DELETE FROM games;`,
        [],
        (_, result) => {
          resolve(result)
        },
        (_, err) => {
          reject(err)
        }
      )
    })
  })
}

// Drop the games table
export const dropTable = () => {
  const db = SQLite.openDatabase("category.db")

  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `DROP TABLE games;`,
        [],
        (_, result) => {
          resolve(result)
        },
        (_, err) => {
          reject(err)
        }
      )
    })
  })
}
