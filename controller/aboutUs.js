const data = require('../models/fakeTeamLeader');
const textContents = require('../models/aboutUsTextContents');
const stringMakeUp = require('../function/string-interaction')

module.exports.getAboutUs = (req, res) => {
    let teamLeaderData = [...data];
    teamLeaderData.forEach(item => item.name = stringMakeUp.upperFirstCase(item.name))

    res.render('pages/aboutUs', { teamLeaders: teamLeaderData, textContents: textContents});
}