
import { BandMember, Gig, Album } from './types';

export const MEMBERS: BandMember[] = [
  {
    id: '1',
    name: 'Nimit Jain',
    role: 'Growl Vocals',
    image: './public/images/nimit.jpg',
    stats: [
      { label: 'number of mics possessed', value: 95 },
      { label: 'guys think from my head', value: 88 },
      { label: 'Stage Presence', value: 92 }
    ]
  },
  {
    id: '2',
    name: 'Samarth Ramesha',
    role: 'Guitar 01/Producer',
    image: './public/images/samarth.jpg',
    stats: [
      { label: 'weight', value: 98 },
      { label: 'riff writing', value: 94 },
      { label: 'need of guitars', value: 85 }
    ]
  },
  {
    id: '3',
    name: 'Mahathi Sriraam',
    role: 'Clean Vocals',
    image: './public/images/mahati.jpg',
    stats: [
      { label: 'thickness of glasses', value: 96 },
      { label: 'sleep token glaze', value: 98 },
      { label: 'ece marks', value: 88 }
    ]
  },
  {
    id: '4',
    name: 'Srijan CM',
    role: 'Drums',
    image: './public/images/srijan.jpg',
    stats: [
      { label: 'love for ice cream sandwich', value: 92 },
      { label: 'urge to stay in time limit', value: 97 },
      { label: 'love for slipknot', value: 90 }
    ]
  },
  {
    id: '5',
    name: 'Sumiran Vuppuluri',
    role: 'Keys/Samples',
    image: './public/images/sumiran.jpg',
    stats: [
      { label: 'mystery', value: 85 },
      { label: 'keys on keyboard', value: 61 },
      { label: 'urge to murder us', value: 89 }
    ]
  },
  {
    id: '6',
    name: 'Dev',
    role: 'Guitar 02',
    image: './public/images/dev.jpg',
    stats: [
      { label: 'tone knowledge', value: 14 },
      { label: 'caffiene addiction', value: 82 },
      { label: 'headbanging', value: 96 }
    ]
  },
  {
    id: '7',
    name: 'Siddharth Aakash Rao',
    role: 'Bass',
    image: './public/images/sid.jpg',
    stats: [
      { label: 'fruity', value: 97 },
      { label: 'twerk', value: 93 },
      { label: 'string guage', value: 90 }
    ]
  }
];

export const GIGS: Gig[] = [
  { id: '1', date: 'OCT 12', venue: 'The Underground', location: 'London, UK', ticketLink: '#' },
  { id: '2', date: 'OCT 25', venue: 'Void Hall', location: 'Berlin, DE', ticketLink: '#' },
  { id: '3', date: 'NOV 02', venue: 'Electric Ballroom', location: 'Paris, FR', ticketLink: '#' },
  { id: '4', date: 'NOV 15', venue: 'Warehouse 9', location: 'Amsterdam, NL', ticketLink: '#' },
  { id: '5', date: 'DEC 01', venue: 'The Abyss', location: 'Prague, CZ', ticketLink: '#' }
];

export const DISCOGRAPHY: Album[] = [
  { id: '1', title: 'Static Horizons', year: '2024', cover: 'https://picsum.photos/seed/album1/500/500' },
  { id: '2', title: 'The Weight of Silence', year: '2022', cover: 'https://picsum.photos/seed/album2/500/500' },
  { id: '3', title: 'Undercurrents EP', year: '2021', cover: 'https://picsum.photos/seed/album3/500/500' }
];
