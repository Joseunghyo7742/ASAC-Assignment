export interface SearchResult {
  tracks: Tracks;
  artists: Artists;
  albums: Albums;
  playlists: Playlists;
  shows: Audiobooks;
  episodes: Episodes;
  audiobooks: Audiobooks;
}

export interface Albums {
  href: string;
  limit: number;
  next: string;
  offset: number;
  previous: string;
  total: number;
  items: AlbumElement[];
}

export interface AlbumElement {
  album_type: string;
  total_tracks: number;
  available_markets: string[];
  external_urls: ExternalUrls;
  href: Href;
  id: string;
  images: Image[];
  name: Href;
  release_date: string;
  release_date_precision: string;
  restrictions: Restrictions;
  type: string;
  uri: string;
  artists: Artist[];
}

export interface Artist {
  external_urls: ExternalUrls;
  href: Href;
  id: Href;
  name: Href;
  type: string;
  uri: Href;
}

export interface ExternalUrls {
  spotify: Href;
}

export type Href = 'string';

export interface Image {
  url: string;
  height: number;
  width: number;
}

export interface Restrictions {
  reason: string;
}

export interface Artists {
  href: string;
  limit: number;
  next: string;
  offset: number;
  previous: string;
  total: number;
  items: ArtistElement[];
}

export interface ArtistElement {
  external_urls: ExternalUrls;
  followers: Followers;
  genres: string[];
  href: Href;
  id: Href;
  images: Image[];
  name: Href;
  popularity: number;
  type: string;
  uri: Href;
}

export interface Followers {
  href: Href;
  total: number;
}

export interface Audiobooks {
  href: string;
  limit: number;
  next: string;
  offset: number;
  previous: string;
  total: number;
  items: AudiobooksItem[];
}

export interface AudiobooksItem {
  authors?: Author[];
  available_markets: Href[];
  copyrights: Copyright[];
  description: Href;
  html_description: Href;
  edition?: string;
  explicit: boolean;
  external_urls: ExternalUrls;
  href: Href;
  id: Href;
  images: Image[];
  languages: Href[];
  media_type: Href;
  name: Href;
  narrators?: Author[];
  publisher: Href;
  type: string;
  uri: Href;
  total_chapters?: number;
  is_externally_hosted?: boolean;
  total_episodes?: number;
}

export interface Author {
  name: Href;
}

export interface Copyright {
  text: Href;
  type: Href;
}

export interface Episodes {
  href: string;
  limit: number;
  next: string;
  offset: number;
  previous: string;
  total: number;
  items: EpisodesItem[];
}

export interface EpisodesItem {
  audio_preview_url: string;
  description: string;
  html_description: string;
  duration_ms: number;
  explicit: boolean;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: Image[];
  is_externally_hosted: boolean;
  is_playable: boolean;
  language: string;
  languages: string[];
  name: string;
  release_date: Date;
  release_date_precision: string;
  resume_point: ResumePoint;
  type: string;
  uri: string;
  restrictions: Restrictions;
}

export interface ResumePoint {
  fully_played: boolean;
  resume_position_ms: number;
}

export interface Playlists {
  href: string;
  limit: number;
  next: string;
  offset: number;
  previous: string;
  total: number;
  items: PlaylistsItem[];
}

export interface PlaylistsItem {
  collaborative: boolean;
  description: Href;
  external_urls: ExternalUrls;
  href: Href;
  id: Href;
  images: Image[];
  name: Href;
  owner: Owner;
  public: boolean;
  snapshot_id: Href;
  tracks: Followers;
  type: Href;
  uri: Href;
}

export interface Owner {
  external_urls: ExternalUrls;
  followers: Followers;
  href: Href;
  id: Href;
  type: string;
  uri: Href;
  display_name: Href;
}

export interface Tracks {
  href: string;
  limit: number;
  next: string;
  offset: number;
  previous: string;
  total: number;
  items: TracksItem[];
}

export interface TracksItem {
  album: AlbumElement;
  artists: ArtistElement[];
  available_markets: Href[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: ExternalIDS;
  external_urls: ExternalUrls;
  href: Href;
  id: Href;
  is_playable: boolean;
  linked_from: LinkedFrom;
  restrictions: Restrictions;
  name: Href;
  popularity: number;
  preview_url: Href;
  track_number: number;
  type: string;
  uri: Href;
  is_local: boolean;
}

export interface ExternalIDS {
  isrc: Href;
  ean: Href;
  upc: Href;
}

export interface LinkedFrom {}
