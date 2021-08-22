const { prefix } = require("../data/config.json");

module.exports = (client) => {
      let presences = [
      { type: "LISTENING", activity: `${prefix}help` },
      { type: "PLAYING", activity: `With My Owner` },
      ];
      client.user.setActivity(presences[0].activity, { type: presences[0].type });
      var index = 1;
      if (!presences.length) return;
      if (presences.length == 1) return;
      setInterval(() => {
      if (index > presences.length - 1) index = 0;
      client.user.setActivity(presences[index].activity, { type: presences[index].type });
      index++;
      }, 20000);
}
