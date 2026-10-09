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
    photos: [],
  },
  {
    id: "strengthening",
    label: "Strengthening we've done",
    intro: "Interventions we've designed and carried out, from column jacketing to crack repair.",
    photos: [],
  },
];
