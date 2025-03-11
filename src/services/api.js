import axios from "axios";

const API_BASE_URL = "https://quizz-musical-backend.airdev.be/api";

export const api = {
  async getCategories() {
    try {
      const response = await axios.get(`${API_BASE_URL}/categories`);
      return response.data;
    } catch (error) {
      console.error("Erreur dans getCategories:", error);
      throw error;
    }
  },
};
