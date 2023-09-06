export interface FeaturedPlaylists{
  message:   string;
  playlists: Playlists;
}

export interface Playlists {
  href:     string;
  limit:    number;
  next:     null;
  offset:   number;
  previous: null;
  total:    number;
  items:    Item[];
}

export interface Item {
  collaborative: boolean;
  description:   string;
  external_urls: ExternalUrls;
  href:          string;
  id:            string;
  images:        Image[];
  name:          string;
  owner:         Owner;
  public:        null;
  snapshot_id:   string;
  tracks:        Tracks;
  type:          string;
  uri:           string;
  primary_color: null;
}

export interface ExternalUrls {
  spotify: string;
}

export interface Image {
  url:    string;
  height: null;
  width:  null;
}

export interface Owner {
  external_urls: ExternalUrls;
  href:          string;
  id:            string;
  type:          string;
  uri:           string;
  display_name:  string;
}

export interface Tracks {
  href:  string;
  total: number;
}
