<template>
    <div class="quiz-blind-test">
        <div v-if="loading">Chargement...</div>
        <div v-else-if="error">{{ error }}</div>
        <div v-else-if="category" class="quiz-content">
            <Timer :duration="category.duration" @timer-end="handleTimeEnd" :key="currentQuestionIndex" />
            <h1>{{ category.title }}</h1>
            <div v-for="(question, index) in category.questions" :key="question.id" class="question-container"
                v-show="currentQuestionIndex === index">
                <div class="question-number">Question {{ currentQuestionIndex + 1 }} / {{ category.questions.length }}
                </div>
                <h3>{{ question.title }}</h3>
                <div class="audio-container" v-if="question.content.sound_url">
                    <audio controls>
                        <source :src="question.content.sound_url" type="audio/mpeg">
                    </audio>
                </div>
                <div class="answers-container">
                    <button v-for="answer in question.content.answers" :key="answer"
                        @click="checkAnswer(question, answer)" :disabled="currentQuestionAnswered" :class="{
                            'answer-button': true,
                            'disabled': currentQuestionAnswered,
                            'correct': currentQuestionAnswered && answer.toLowerCase() === question.answer.toLowerCase(),
                            'incorrect': currentQuestionAnswered && selectedAnswer === answer && !currentQuestionCorrect
                        }">
                        {{ answer }}
                    </button>
                </div>
                <div class="points">Points: {{ question.points }}</div>
                <div v-if="!isTimeUp">
                    <div v-if="currentQuestionAnswered && !currentQuestionCorrect" class="error-message">
                        incorrect !
                    </div>
                    <div v-if="questionTimeUp" class="error-message">
                        Temps écoulé pour cette question !
                    </div>
                    <button v-if="currentQuestionAnswered && currentQuestionIndex < category.questions.length - 1"
                        @click="nextQuestion" class="next-button">
                        Question suivante
                    </button>
                </div>
            </div>
            <div class="total-score">Score total: {{ currentScore }}</div>
            <div class="time-over-overlay flex-col" v-if="isTimeUp">
                <div class="time-over-content">
                    <h2>Temps écoulé !</h2>
                    <p>Score final: {{ currentScore }}</p>
                </div>
                <div>
                    <button @click="$router.push('/')" class="next-button">Retour à l'accueil</button>
                    <button @click="restartQuiz" class="next-button">Rejouer</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { api } from '@/services/api'
import Timer from './Timer.vue'

export default {
    name: 'QuizBlindTest',

    components: {
        Timer,
    },

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
            answeredQuestions: new Set(),
            currentQuestionIndex: 0,
            showNextButton: false,
            currentQuestionAnswered: false,
            currentQuestionCorrect: false,
            isTimeUp: false,
            selectedAnswer: null,
            questionTimeUp: false,
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
            if (this.answeredQuestions.has(question.id) || this.questionTimeUp) {
                return
            }

            this.selectedAnswer = selectedAnswer
            this.currentQuestionAnswered = true
            const isCorrect = selectedAnswer.toLowerCase() === question.answer.toLowerCase()
            this.currentQuestionCorrect = isCorrect

            if (isCorrect) {
                this.currentScore += question.points
                this.answeredQuestions.add(question.id)
            }
        },

        nextQuestion() {
            if (this.currentQuestionIndex < this.category.questions.length - 1) {
                this.currentQuestionIndex++
                this.currentQuestionAnswered = false
                this.currentQuestionCorrect = false
                this.selectedAnswer = null
                this.questionTimeUp = false
            }
        },

        handleTimeEnd() {
            this.questionTimeUp = true;
            this.currentQuestionAnswered = true;

            // Attendre 2 secondes avant de passer à la question suivante
            setTimeout(() => {
                if (this.currentQuestionIndex < this.category.questions.length - 1) {
                    this.nextQuestion();
                } else {
                    this.isTimeUp = true;
                }
            }, 3000);
        },

        restartQuiz() {
            this.currentScore = 0
            this.answeredQuestions.clear()
            this.currentQuestionIndex = 0
            this.currentQuestionAnswered = false
            this.currentQuestionCorrect = false
            this.selectedAnswer = null
            this.isTimeUp = false
            this.questionTimeUp = false
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

.flex-col {
    display: flex;
    flex-direction: column;
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

.answer-button.disabled {
    cursor: not-allowed;
    opacity: 0.7;
}

.answer-button.correct {
    background-color: #4CAF50;
    color: white;
    border-color: #4CAF50;
}

.answer-button.incorrect {
    background-color: #f44336;
    color: white;
    border-color: #f44336;
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

.next-button {
    margin-top: 1rem;
    padding: 0.8rem 1.5rem;
    background-color: var(--primary-color);
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
    width: 100%;
}

.next-button:hover {
    opacity: 0.9;
}

.total-score {
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
    margin-top: 2rem;
    color: var(--primary-color);
}

.error-message {
    color: red;
    margin: 1rem 0;
    text-align: center;
    font-weight: bold;
    animation: fadeIn 0.3s ease-in;
}

.time-over-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.time-over-content {
    background-color: white;
    padding: 2rem;
    border-radius: 8px;
    text-align: center;
    animation: fadeIn 0.5s ease-in;
}

.time-over-content h2 {
    color: #f44336;
    font-size: 2rem;
    margin-bottom: 1rem;
}

.question-number {
    text-align: center;
    font-size: 1.2rem;
    color: var(--primary-color);
    margin-bottom: 1rem;
    font-weight: bold;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: scale(0.9);
    }

    to {
        opacity: 1;
        transform: scale(1);
    }
}
</style>
