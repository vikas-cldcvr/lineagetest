import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import * as fs from "fs";
import * as path from "path";

const copyDir = (src, dest, callback?: (er: Error) => void) => {
  const copy = (copySrc, copyDest) => {
    fs.readdir(copySrc, (err, list) => {
      if (err) {
        callback(err);
        return;
      }
      list.forEach((item) => {
        const ss = path.resolve(copySrc, item);
        fs.stat(ss, (err, stat) => {
          if (err) {
            callback(err);
          } else {
            const curSrc = path.resolve(copySrc, item);
            const curDest = path.resolve(copyDest, item);

            if (stat.isFile()) {
              fs.createReadStream(curSrc).pipe(fs.createWriteStream(curDest));
            } else if (stat.isDirectory()) {
              fs.mkdirSync(curDest, { recursive: true });
              copy(curSrc, curDest);
            }
          }
        });
      });
    });
  };

  fs.access(dest, (err) => {
    if (err) {
      fs.mkdirSync(dest, { recursive: true });
    }
    copy(src, dest);
  });
};

copyDir("node_modules/@cldcvr/flow-code-editor/dist/assets", "assets");

export default defineConfig({
  plugins: [vue()],
  base: "",
  assetsInclude: ["assets"],
  build: {
    chunkSizeWarningLimit: 100000,
  },
});
