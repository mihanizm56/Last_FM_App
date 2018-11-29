import { api_key, limitPerPage, userAgent } from "./config";
import LastFM from "last-fm";

export const getTopArtists = (page, callback) => {
  const lastfm = new LastFM(api_key, {
    userAgent: userAgent
  });

  lastfm.chartTopArtists(
    { page: page, limit: limitPerPage, api_key: api_key },
    (error, data) => {
      if (data) return callback(data);
      return console.warn(error)
    }
  );
};

export const searchTracks = (string, page, callback) => {
  const lastfm = new LastFM(api_key, {
    userAgent: userAgent
  });

  lastfm.search(
    { artist: string, api_key: api_key, page: page, q: string },
    (error, data) => {
      if (data) return callback(data);
      return console.warn(error);
    }
  );
};


export const getTagTopArtists = (tag, limit,callback) => {
  const lastfm = new LastFM(
    api_key,
    {
      userAgent: userAgent
    }
  );

  lastfm.tagTopArtists(
    { tag: tag, api_key: api_key, limit: limit },
    (error, data) => {
      if (data) return callback(data);
      return console.warn(error);
    }
  );
}