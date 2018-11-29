var sqlMap = {
  // 用户
  user: {
      login: 'SELECT password FROM user WHERE name = ?;',
      add: 'insert into user(id,name, password) values (?,?, ?);'
  }
}

module.exports = sqlMap;
