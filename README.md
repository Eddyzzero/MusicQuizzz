# 🎵 MusicQuizzz

Un quiz musical interactif développé avec Vue 3 qui met à l'épreuve vos connaissances musicales !

## ✨ Fonctionnalités

- 🎧 Blind Test : Écoutez et devinez les chansons
- 📝 Quiz Paroles : Testez vos connaissances des paroles de chansons
- ⏱️ Timer pour chaque question
- 🏆 Système de points
- 🎯 Score en temps réel
- 📱 Interface responsive

## 🛠️ Technologies Utilisées

- Vue.js 3
- Vue Router
- Vite
- Axios pour les appels API
- CSS personnalisé avec variables
- API REST externe pour les données musicales

## 🚀 Installation

1. Clonez le repository :

```bash
git clone https://github.com/votre-username/MusicQuizzz.git
```

2. Installez les dépendances :

```bash
cd MusicQuizzz
npm install
```

3. Lancez le serveur de développement :

```bash
npm run dev
```

## 📦 Build Production

Pour créer une version de production :

```bash
npm run build
```

## 🏗️ Structure du Projet

```
MusicQuizzz/
├── src/
│   ├── assets/         # Styles globaux et assets
│   ├── components/     # Composants réutilisables
│   ├── views/          # Pages/Vues
│   ├── router/         # Configuration des routes
│   ├── services/       # Services (API, etc.)
│   └── App.vue         # Composant racine
```

## 🎮 Comment Jouer

1. **Choisissez une Catégorie**

   - Blind Test : Écoutez et devinez les chansons
   - Quiz Paroles : Complétez les paroles manquantes

2. **Règles du Jeu**
   - Chaque question a un timer
   - Les points sont attribués en fonction de la difficulté
   - Répondez avant la fin du temps imparti

## 🧪 Tests et Vérification

1. Lancez les tests :

```bash
npm run test
```

2. Vérifiez le build de production :

```bash
npm run test:build
```

3. Vérification complète avant déploiement :

```bash
npm run check
```

## 🚀 Déploiement

### Prérequis

- Node.js version >= 14
- Accès à l'API musicale
- Configuration des variables d'environnement

### Étapes de déploiement

1. **Vérification de l'environnement**

   - Vérifiez la connexion à l'API
   - Testez les variables d'environnement

2. **Build et Test**

   ```bash
   npm run check
   ```

3. **Prévisualisation locale**

   ```bash
   npm run preview
   ```

4. **Hébergement recommandé**
   - Vercel
   - Netlify
   - GitHub Pages

### Variables d'environnement requises

```env
VITE_API_URL=https://quizz-musical-backend.airdev.be/api
```

### Vérification post-déploiement

- Testez toutes les routes
- Vérifiez le chargement des assets
- Testez la lecture audio
- Vérifiez le système de score
- Testez la responsive design

## 🤝 Contribution

Les contributions sont les bienvenues ! Pour contribuer :

1. Forkez le projet
2. Créez votre branche (`git checkout -b feature/AmazingFeature`)
3. Commitez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Poussez vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## 📝 License

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 👥 Auteurs

- Açelya Lejeune - [@LejeuneA](https://github.com/LejeuneA)
- Mihn trieu - [@trmnh](https://github.com/trmnh)
- Jhon Florez - [@Eddyzzero](https://github.com/Eddyzzero)

## 🙏 Remerciements

- API Musicale pour les données
- Contributeurs et testeurs
