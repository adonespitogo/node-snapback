const path = require("path");
const fs = require("fs-extra");

const pacmanHookFile = path.join(__dirname, "../files/95-bootbackup.hook");
const bootbackupFile = path.join(__dirname, "../files/bootbackup.sh");
const pacmanHookInstallPath = "/etc/pacman.d/hooks/95-bootbackup.hook";
const bootbackupInstallPath = "/usr/local/bin/bootbackup.sh";

exports.install = async () => {
  await fs.ensureDir(path.dirname(pacmanHookInstallPath));
  await fs.ensureDir(path.dirname(bootbackupInstallPath));

  await fs.copy(pacmanHookFile, pacmanHookInstallPath);
  await fs.copy(bootbackupFile, bootbackupInstallPath);

  //chmod +x /usr/local/bin/bootbackup.sh
  await fs.chmod(bootbackupInstallPath, 0o755);
};
