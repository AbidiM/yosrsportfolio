import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Yosr Ben Messaoud', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Yosr Ben Messaoud',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'projet1.png',
    title: 'Poussière naissante, 2020 ',
    info: 'Graphite sur consan. 21 x 29,7 cm',
    info2: '-Poussière naissante est un dessin qui met en image des affects flottants, des souvenirs sensibles et une image métaphorique réunissant différents symboles. De l’image à la mère avec son enfant à un corps marqué par le temps dans l’ossature est assez visible. De l’image de débris et de la maison qui s’effrite à la naissance d’une rose en passant par une figure fantomatique qui sort de l’ombre. Nature et architecture cohabite. Ombre et lumière. Mélangeant des traits fins qui tracent des lignes achevées et inachevées. Pointillisme réalisé en vitesse et estampage. Traçage en lenteur de lignes droites et expression lyrique. Une image poétique qui juxtapose plusieurs éléments disparates dans une composition cohérente. ',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'projet2.PNG',
    title: 'Ubiquité interstitielle, 2020',
    info: 'Montage numérique de photographies',
    info2: '-Ubiquité interstitielle est un montage de trois photographies superposées. De deux espaces : l’espace d’un cimetière et celui d’une terre fertile de végétation d’oliviers.\nDes stèles funéraires froides, structure cloitrée à des limites bien distinctes par-dessus un terrain tracé par un chemin qui semble infini.\nUn état d’entre deux entre deux mondes traversé  en oblique  par la muraille de la mosquée.\nContrastes forts entre noir et blanc et une 3eme image de la même image presque imperceptible est la conduite du chemin du milieu. Mise en abime du temps, conjugaison entre deux mondes ayant de fortes significations spirituelles et religieuses que ce soit pour la mosquée ou les oliviers.',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'projet3.png',
    title: 'Le battement de l’être, 2020',
    info: 'Collage numérique,  scanners médicaux, fragment d’un carnet d’enfance et superposition numérique d’critère. 42 x 59,4 cm',
    info2: '-le battement de l’être est un support de mémoire, un dispositif hybride permettant à toutes formes d’images, matérielles et mentales, de cohabiter. Le battement de l’être regroupe une série d’imageries :\nD’une d’un carnet d’enfance et son besoin d’inscrire des images mentales ainsi que des propos textuelles lié à un état d’être dans un instant passé à une imagerie médicale du corps réalisé des années âpres.\nLiés tous les deux par un montage numérique de textes illisibles en superposition. Le tout complet offre un palimpseste d’images. Une superposition d’histoires. Un entredeux et un chiasme entre des instants T.\nDe l’enfance ou le corps s’exprime, de l’image intime et  manuelle à l’image organique et strictement  physiologique des scanners re-photographiés. Je mesure leur part intimité et d’appropriation\nMêlant au final différent registre et impressions sur le vécu, l’œuvre relève d’un questionnement vif de l’identité  plus qu’une tentative d’archivage. Mettant en question l’étrange non-familiarité de son propre corps et de sa propre histoire. Un support du vécu rappelant  la notion du souci de soi et de l’autre énoncé par Foucault.',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'projet4.PNG',
    title: 'Veines : entre racines et rhizomes, 2019-2020 ',
    info: 'Diptyque ; collage numérique, photographie et texte. 45 x 52 cm.\n\nPhotographie. 29.7 x 42 cm.',
    info2: '-Veines : entre racines et rhizomes est un diptyque de deux photographies accompagné d’un texte poétique.\nUn amas de branches mortes entrelacés les unes aux autres dans un tout indéfinissable. Des lignes s’entremêlent sans pouvoir s’en saisir le sens, lumineuses avec des porosités mises à l’ombre. Un squelette cachant peut être à l’intérieur un mystère.\nL’autre photo présente une main en gros plan avec une concentration sur les veines. Image épurée. Dans un minimalisme presque abstrait, les lignes de la main viennent inscrire les sutras  du texte dans un silence.',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
