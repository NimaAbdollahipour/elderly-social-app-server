const os = require("os");

const getIPAddress = () => {
  const interfaces = os.networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      // Skip over internal (non-Internet reachable) and IPv6 addresses
      if (iface.internal || iface.family !== "IPv4") {
        continue;
      }
      return iface.address;
    }
  }
};

module.exports = { getIPAddress };
