const axios = require('axios')

exports.homePage = (req, res) => {
  res.send('Home page')
}
exports.testPage = async (req, res) => {
  const url = 'http://stats.nba.com/stats/commonallplayers?IsOnlyCurrentSeason=1&Season=2017-18&LeagueID=00'
  const data = await axios.get(url)
    .then(res => res.data)
  console.log('number of players: ', data.resultSets[0].rowSet.length)
  res.send(data)
}
