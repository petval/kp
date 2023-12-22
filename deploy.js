// eslint-disable-next-line no-unused-vars
const FtpDeploy = require("ftp-deploy");
const ftpDeploy = new FtpDeploy();

const config = {
    user: "klinickapsycholozka_cz",
    password: "", // optional, prompted if none given (don't store in repo)
    host: "www.klinickapsycholozka.cz",
    port: 21,
    localRoot: __dirname + "/dist",
    remoteRoot: "/klinickapsycholozka.cz",
    include: ["*", "**/*"], // this would upload everything except dot files
		exclude: ["**/_jampack/**", "**/blog/**"],
    deleteRemote: false, // delete existing files at destination before uploading
    forcePasv: true // Passive mode is forced (EPSV command is not sent)
}

ftpDeploy.deploy(config)
    .then(res => console.log("finished:", res))
    .catch(err => console.log(err));