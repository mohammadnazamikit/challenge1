import express from "express";
import { pipeline } from "stream";
import { getArtist } from "../tools/fs-tools.js";

const artistRouter = express.Router();

artistRouter.get("/artist.search", async (req, res, next) => {
  try {
    const artists = await getArtist();
    if (req.query && req.query.artist) {
      const filteredArtist = artists.filter(
        (artist) => artist.name === req.query.artist
      );
      if (!filteredArtist) {
        const artistsName = artists.map((artist) => artist.name);
        res.send(artistsName);
      }

      res.setHeader("Content-Disposition", "attachment; filename=artist.csv");
      const source = filteredArtist;
      const transform = new json2csv.Transform({
        fields: ["name", "mbid", "url", "image_small", "image"],
      });
      const destination = res;

      pipeline(source, transform, destination, (err) => {
        if (err) console.log(err);
      });
    } else {
      res.status(200).send(artists);
    }
  } catch (error) {
    next(error);
  }
});

export default artistRouter;
