
export interface MemberStat {
  label: string;
  value: number; // 0 to 100
}

export interface BandMember {
  id: string;
  name: string;
  role: string;
  stats: MemberStat[];
  image: string;
}

export interface Gig {
  id: string;
  date: string;
  venue: string;
  location: string;
  ticketLink: string;
}

export interface Album {
  id: string;
  title: string;
  year: string;
  cover: string;
}
