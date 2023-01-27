import { createStore } from 'vuex'

export default createStore({
  state: {
    formations: [
      {
        id: 1,
        title: 'Formation 1',
        description: 'Description de la formation 1, contenu des progreammes, objectifs, débouchés, etc.',
        price: 1000,
        niveau: 'RNCP 1',
      },
      {
        id: 2,
        title: 'Formation 2',
        description: 'Description de la formation 2, contenu des progreammes, objectifs, débouchés, etc.',
        price: 2000,
        niveau: 'RNCP 2',
      },
      {
        id: 3,
        title: 'Formation 3',
        description: 'Description de la formation 3, contenu des progreammes, objectifs, débouchés, etc.',
        price: 3000,
        niveau: 'RNCP 3',
      },
      {
        id: 4,
        title: 'Formation 4',
        description: 'Description de la formation 4, contenu des progreammes, objectifs, débouchés, etc.',
        price: 4000,
        niveau: 'RNCP 4',
      },
      {
        id: 5,
        title: 'Formation 5',
        description: 'Description de la formation 5, contenu des progreammes, objectifs, débouchés, etc.',
        price: 5000,
        niveau: 'RNCP 5',
      },
    ],
    taux: [
      {
        id: 1,
        value: 100,
        label: 'De réussite'
      },
      {
        id: 2,
        value: 93,
        label: 'D’emploi dans les 3 mois'
      },
      {
        id: 3,
        value: 0,
        label: 'De décrochage'
      },
      {
        id: 4,
        value: 100,
        label: 'De satisfaction'
      },
      {
        id: 5,
        value: 0,
        label: 'D\'abandon'
      }
    ],
    logoPath: [
      '/src/assets/clesence.png',
      '/src/assets/ITCE.png',
      '/src/assets/logo-e-moteph.png',
      '/src/assets/logo-efs-couleur.png',
      '/src/assets/M6-DS.webp',
      '/src/assets/Meelo.png',
      '/src/assets/S-inter.png',
      '/src/assets/SLG.jpg',
      '/src/assets/unicancer.png',
      '/src/assets/URSSAF.svg.png',
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
