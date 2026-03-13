export const navLinks = [
  { id: "paper", path: "/paper", label: "Works on Paper" },
  { id: "paintings", path: "/paintings", label: "Selected Publications" },
  { id: "exhibitions", path: "/exhibitions", label: "Exhibitions" },
  { id: "bio", path: "/bio", label: "Bio" },
  { id: "contatti", path: "/contacts", label: "Contact" },
];

export const bio = [
  "Giuseppe Stasi, known as Beppe Stasi, was born in 1993 in Longobucco, a small town in the Cosenza province of Calabria, southern Italy. He approached painting as a self-taught artist, developing a strong passion for drawing and color from a very young age.",
  "He studied at the Academy of Fine Arts, first in Bologna and then in Rome, where he permanently relocated in 2016. During his academic years, he refined his pictorial research, focused on portraiture, the female figure, and what he calls the \"liquidity of color\" – a visual language where water becomes the central and symbolic element.",
  "He collaborates with various editorial and musical projects: creating album covers, book covers, and illustrated albums for Esordisco and Squilibri Editore. His illustrations accompany publications related to the musical and cultural traditions of southern Italy.",
  "In 2020, some of his works appeared in the film \"Weekend\" and he created sculptures and set designs for the \"Constitutional Circus\" project. In 2021, his works appeared in the Netflix series \"Incastrati\" by Ficarra and Picone, reaching a vast national and international audience.",
  "He currently teaches Online Illustration at the Scuola Romana dei Fumetti (Roman School of Comics), where he shares his artistic vision with new generations. He lives and works in Rome.",
];

export const artworks = [
  { id: 1, title: "Penziere mieje", year: 2021, technique: "Oil on canvas" },
  { id: 2, title: "Paesaggio con rocca", year: 2023, technique: "Oil on canvas" },
  { id: 3, title: "Paesaggio", year: 2023, technique: "Oil on canvas" },
  { id: 4, title: "Ninna Nanna", year: 2023, technique: "Oil on canvas" },
  { id: 5, title: "Bacio", year: 2023, technique: "Oil on canvas" },
  { id: 6, title: "Pinocchio capitolo XV – dittico", year: 2022, technique: "Oil on canvas" },
];

export const paperWorks = [
  { id: 1, title: "Octopus", technique: "watercolor on paper", dimensions: "cm 56x76", year: 2025, image: "octopus.jpg" },
  { id: 2, title: "Untitled", technique: "", dimensions: "cm 36x56", year: 2025, image: "untitled.jpg" },
];

export type Exhibition = {
  title: string;
  year: number;
  venue: string;
  type: "solo" | "group";
};

export const exhibitions: Exhibition[] = [
  // Solo
  { title: "POV", year: 2020, venue: "LDM Gallery, Firenze", type: "solo" },
  { title: "TILT!", year: 2019, venue: "Sinestetica Art Gallery, Roma", type: "solo" },
  { title: "è-stasi", year: 2017, venue: "Galleria Studio Rosai, Firenze", type: "solo" },
  { title: "Volti", year: 2015, venue: "Palazzo Citino, Longobucco (CS)", type: "solo" },
  { title: "Volti", year: 2013, venue: "Galleria di Arte Provinciale di Santa Chiara, Cosenza", type: "solo" },
  { title: "Ombre di Grafite", year: 2011, venue: "Palazzo Citino, Longobucco (CS)", type: "solo" },
  // Group
  { title: "On the Road Again", year: 2025, venue: "Huberty & Breyne, Bruxelles", type: "group" },
  { title: "Animal House", year: 2025, venue: "Von Buren Contemporary, Roma", type: "group" },
  { title: "Appuntamento al buio", year: 2025, venue: "Chroma Mandrione, Roma", type: "group" },
  { title: "Sconfinamenti", year: 2024, venue: "Capitolium Art Gallery", type: "group" },
  { title: "THE GRAND TOUR", year: 2024, venue: "Von Buren Contemporary, Roma", type: "group" },
  { title: "Eternally Pre-Raphaelite", year: 2023, venue: "Von Buren Contemporary, Roma", type: "group" },
  { title: "The Traveler", year: 2022, venue: "Huberty & Breyne, Bruxelles", type: "group" },
  { title: "Suggestioni Dantesche: La Divina Commedia illustrata", year: 2020, venue: "Los Angeles", type: "group" },
  { title: "Segno contemporaneo", year: 2019, venue: "Dingyuan International Art Center, Pechino", type: "group" },
  { title: "Corpus Dei", year: 2016, venue: "Nero Gallery, Roma", type: "group" },
  { title: "Waiting for the Moon", year: 2016, venue: "Nero Gallery, Roma", type: "group" },
  { title: "Festival Invasioni, Liberamente", year: 2014, venue: "MAM Museo delle arti e dei mestieri, Cosenza", type: "group" },
  { title: "PERCORSI / Tempi Diversi", year: 2012, venue: "Galleria di Arte Provinciale di Santa Chiara, Cosenza", type: "group" },
];

export const WHATSAPP_NUMBER = "+393803453521";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER.replace("+", "")}`;
