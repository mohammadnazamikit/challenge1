import { fileURLToPath } from "url";
import { dirname, join } from "path";
import fs from "fs-extra";

const { readJSON } = fs;

const dataFolderPath = join(
  dirname(fileURLToPath(import.meta.url)),
  "../JsonFile"
);

const artistJSONPATH = join(dataFolderPath, "artist.json");

export const getArtist = () => readJSON(artistJSONPATH);
