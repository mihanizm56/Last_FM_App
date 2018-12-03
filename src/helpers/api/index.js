import { api_key, limitPerPage, userAgent, requestDelay } from "./config"
import LastFM from "last-fm"
import { debounce } from '../'

export const getTopArtists = debounce((page, limit = limitPerPage, callback) => {
  const lastfm = new LastFM(api_key, {
    userAgent: userAgent,
  })

  lastfm.chartTopArtists(
    { page: page, limit: limit, api_key: api_key },
    (error, data) => {
      if (data) return callback(data)
      return console.warn(error)
    }
  )
})

export const getTopTracks = debounce((page, limit, callback) => {
  const lastfm = new LastFM(api_key, {
    userAgent: userAgent,
  })
  lastfm.chartTopTracks(
    { api_key: api_key, page: page, limit: limit },
    (error, data) => {
      if (data) return callback(data)
      return console.warn(error)
    }
  )
}, requestDelay)

export const searchTracksName = debounce((string, page, callback) => {
  const lastfm = new LastFM(api_key, {
    userAgent: userAgent,
  })
  lastfm.trackSearch(
    { q: string, api_key: api_key, page: page },
    (error, data) => {
      if (data) return callback(data)
      return console.warn(error)
    }
  )
}, requestDelay, {leading: true, trailing: true})

export const searchTracks = debounce((string, page, callback) => {
  const lastfm = new LastFM(api_key, {
    userAgent: userAgent,
  })

  lastfm.search(
    { artist: string, api_key: api_key, page: page, q: string },
    (error, data) => {
      if (data) return callback(data)
      return console.warn(error)
    }
  )
}, requestDelay, {leading: true, trailing: true})

export const getTagTopArtists = (tag, limit, callback) => {
  const lastfm = new LastFM(api_key, {
    userAgent: userAgent,
  })

  lastfm.tagTopArtists(
    { tag: tag, api_key: api_key, limit: limit },
    (error, data) => {
      if (data) return callback(data)
      return console.warn(error)
    }
  )
}

export const getArtistTopAlbums = (name, callback) => {
  const lastfm = new LastFM(api_key, {
    userAgent: userAgent,
  })

  lastfm.artistTopAlbums({ name: name, api_key: api_key }, (error, data) => {
    if (data) return callback(data)
    return console.warn(error)
  })
}

export const getArtistInfo = (name, callback) => {
  const lastfm = new LastFM(api_key, {
    userAgent: userAgent,
  })

  lastfm.artistInfo({ name: name, api_key: api_key }, (error, data) => {
    if (data) return callback(data)
    return console.warn(error)
  })
}

export const getArtistTopTracks = (name, callback) => {
  const lastfm = new LastFM(api_key, {
    userAgent: userAgent,
  })

  lastfm.artistTopTracks({ name: name, api_key: api_key }, (error, data) => {
    if (data) return callback(data)
    return console.warn(error)
  })
}

export const getAlbumTracks = (artistName, name, callback) => {
  const lastfm = new LastFM(api_key, {
    userAgent: userAgent,
  })

  lastfm.albumInfo(
    { artistName: artistName, name: name, api_key: api_key },
    (error, data) => {
      if (data) return callback(data)
      return console.warn(error)
    }
  )
}
