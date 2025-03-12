<template>
    <div>
        <!-- categorie Title -->
        <h1>{{ title }}</h1>
        <!-- lyrics -->
         <p>{{ currentQuestion }}</p>

    </div>
</template>

<script>

import { API_BASE_URL } from '@/api/quizApi';

export default {
    name: 'TitleComponent',
    data() {
        return {
            title: 'Quizz Musical',
            currentQuestion: ['question1', 'question2', 'question3'],
        }
    },

    methods: {
        async getQuestions() {
            const questions = await fetch(`${API_BASE_URL}/questions/`);
            return questions.json();
        }
    },
    
}
</script>

<style>

</style>