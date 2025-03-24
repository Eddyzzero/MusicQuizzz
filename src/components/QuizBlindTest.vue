<template>
    <div class="quiz-blind-test">
        <div v-if="loading">Chargement...</div>
        <div v-else-if="error">{{ error }}</div>
        <div v-else-if="category" class="quiz-content">
            <h1>{{ category.title }}</h1>
            <div v-for="question in category.questions" :key="question.id" class="question-container">
                <h3>{{ question.title }}</h3>
                <div class="audio-container" v-if="question.content.sound_url">
                    <audio controls>
                        <source :src="question.content.sound_url" type="audio/mpeg">
                    </audio>
                    <p class="song-info" v-if="question.content.song_title">
                        Titre: {{ question.content.song_title }}
                        <span v-if="question.content.song_author">
                            - Artiste: {{ question.content.song_author }}
                        </span>
                    </p>
                </div>
                <div class="answers-container">
                    <button v-for="answer in question.content.answers" :key="answer"
                        @click="checkAnswer(question, answer)" class="answer-button">
                        {{ answer }}
                    </button>
                </div>
                <div class="points">Points: {{ question.points }}</div>
            </div>
        </div>
    </div>
</template>

<script>
import { api } from '@/services/api'

export default {
    name: 'QuizBlindTest',
    props: {
        id: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            category: null,
            loading: false,
            error: null,
            currentScore: 0,
            answeredQuestions: new Set()
        }
    },

    created() {
        this.fetchBlindTestCategory()
    },

    methods: {
        // Fetch the blind test category data
        async fetchBlindTestCategory() {
            this.loading = true
            try {
                const data = await api.getCategoryData(this.id)
                this.category = data
                console.log('Category data:', data)
            } catch (error) {
                console.error('Error:', error)
                this.error = 'Impossible de charger le blind test.'
            } finally {
                this.loading = false
            }
        },

        // Check if the selected answer is correct
        checkAnswer(question, selectedAnswer) {
            if (this.answeredQuestions.has(question.id)) {
                alert('Vous avez déjà répondu à cette question!')
                return
            }

            const isCorrect = selectedAnswer.toLowerCase() === question.answer.toLowerCase()
            if (isCorrect) {
                this.currentScore += question.points
                this.answeredQuestions.add(question.id)
                alert(`Correct! +${question.points} points\nScore total: ${this.currentScore}`)
            } else {
                alert('Incorrect! Essayez encore')
            }
        }
    }
}
</script>

<style scoped>
.quiz-blind-test {
    padding: 2rem;
    max-width: 800px;
    margin: 0 auto;
}

.question-container {
    margin-bottom: 2rem;
    padding: 1rem;
    border: 1px solid var(--light-grey);
    border-radius: 8px;
}

.audio-container {
    margin: 1rem 0;
}

.answers-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    margin: 1rem 0;
}

.answer-button {
    padding: 0.8rem;
    border: 2px solid var(--primary-color);
    border-radius: 4px;
    background: white;
    cursor: pointer;
    transition: all 0.3s ease;
}

.answer-button:hover {
    background: var(--primary-color);
    color: white;
}

.points {
    font-weight: bold;
    color: var(--primary-color);
}

.song-info {
    margin-top: 0.5rem;
    font-style: italic;
    color: var(--dark-grey);
}
</style>
