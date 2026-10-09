// Project gallery photos. Put image files in /public/gallery/ and list them here.
// Every photo needs a one-line caption in the form "[What it is] · [Location]",
// e.g. "Diagonal shear crack near window opening · Gangtok". It is also the alt text.
// Blur faces, house numbers and identifiable property details before adding.
// TODO: strengthening photos need owner consent before they go live.

export type GalleryPhoto = {
  src: string;
  width: number;
  height: number;
  caption: string;
};

export type GalleryCategory = {
  id: string;
  label: string;
  intro: string;
  photos: GalleryPhoto[];
};

export const gallery: GalleryCategory[] = [
  {
    id: "damage",
    label: "Cracks & damage we've seen",
    intro: "Real conditions from buildings we've assessed across Sikkim. If something here looks familiar, send us a photo.",
    photos: [
      { src: "/gallery/seen-1.jpg", width: 960, height: 1280, caption: "Wide crack running from door lintel to ceiling · Sikkim" },
      { src: "/gallery/seen-2.jpg", width: 899, height: 1599, caption: "Open vertical crack at a wall corner joint · Sikkim" },
      { src: "/gallery/seen-3.jpg", width: 956, height: 1280, caption: "Spalled column with corroded, exposed reinforcement · Sikkim" },
      { src: "/gallery/seen-4.jpg", width: 3120, height: 4160, caption: "Vertical crack in column after plaster removal · Sikkim" },
      { src: "/gallery/seen-5.jpg", width: 2000, height: 1500, caption: "Spalled lintel beam above a perforated screen wall · Sikkim" },
      { src: "/gallery/seen-6.jpg", width: 2000, height: 1500, caption: "Damp, peeling ceiling and cracked beam above a window · Sikkim" },
    ],
  },
  {
    id: "strengthening",
    label: "Strengthening we've done",
    intro: "Interventions we've designed and carried out, from column jacketing to crack repair.",
    photos: [
      { src: "/gallery/done-1.jpg", width: 1280, height: 960, caption: "Column jacketing cage tied into new plinth beams · Sikkim" },
      { src: "/gallery/done-2.jpg", width: 1280, height: 960, caption: "Roughened columns and new foundation beam reinforcement · Sikkim" },
      { src: "/gallery/done-3.jpg", width: 3000, height: 4000, caption: "Jacketing reinforcement cage around an existing column base · Sikkim" },
      { src: "/gallery/done-4.jpg", width: 3000, height: 4000, caption: "Full-height column jacketing with new footing formwork · Sikkim" },
      { src: "/gallery/done-5.jpg", width: 1290, height: 937, caption: "Carbon fibre (FRP) wrap at a beam-column joint · Sikkim" },
      { src: "/gallery/done-6.jpg", width: 1125, height: 2000, caption: "Column jacketing cage inside footing formwork · Sikkim" },
    ],
  },
];
