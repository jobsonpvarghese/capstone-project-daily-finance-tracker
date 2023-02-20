import * as SQLite from "expo-sqlite"

// Open a database for expense which holds the id, expense title , expense amount, expense date and the tag
export const dbInitExpense = () => {
  const db = SQLite.openDatabase("expenses.db")

  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS expense (id VARCHAR PRIMARY KEY NOT NULL, expenseTitle TEXT NOT NULL, 
            expenseAmount TEXT NOT NULL, expenseDate TEXT NOT NULL, expenseTag TEXT NOT NULL, expenseSource TEXT NOT NULL);`,
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

// Insert a expense into the database
export const dbInsertExpense = (id, expenseTitle, expenseAmount, expenseDate, expenseTag, expenseSource) => {
  const db = SQLite.openDatabase("expenses.db")

  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `INSERT INTO expense (id, expenseTitle, expenseAmount, expenseDate, expenseTag, expenseSource) VALUES (?, ?, ?, ?, ?, ?);`,
        [id, expenseTitle, expenseAmount, expenseDate, expenseTag, expenseSource],
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

// Get all expenses from the database
export const dbGetExpenses = () => {
  const db = SQLite.openDatabase("expenses.db")

  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM expense`,
        [],
        (_, result) => {
          const tasks = result.rows._array.map(item => {
            return {
              id: item.id,
              expenseTitle: item.expenseTitle,
              expenseAmount: item.expenseAmount,
              expenseDate: item.expenseDate,
              expenseTag: item.expenseTag,
              expenseSource: item.expenseSource
            }
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
// edit a expense from the database
export const dbEditExpense = (id, expenseTitle, expenseAmount, expenseDate, expenseTag, expenseSource) => {
  const db = SQLite.openDatabase("expenses.db")
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `UPDATE expense SET expenseTitle = ?, expenseAmount = ?, expenseDate = ?, expenseTag = ?, expenseSource = ? WHERE id = ?;`,
        [expenseTitle, expenseAmount, expenseDate, expenseTag, expenseSource, id],
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

// Delete a expense from the database
export const dbDeleteExpense = id => {
  const db = SQLite.openDatabase("expenses.db")

  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `DELETE FROM expense WHERE id = ?;`,
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
