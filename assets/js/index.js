const form = document.getElementById("form");
const input = document.getElementById("chat-input");
const messages = document.getElementById("messages");
const apiKey = "";

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const message = input.value;
    input.value = "";
  
    messages.innerHTML +=   `<div class="user-message">
                                <i class="fa-solid fa-user fa-lg"></i> 
                                <span>${message}</span>
                             </div>`;
  
    // Use axios library to make a POST request to the OpenAI API
    const response = await axios.post(
      "https://api.openai.com/v1/completions",
      {
        prompt: message,
        model: "text-davinci-003",
        temperature: 0,
        max_tokens: 1000,
        top_p: 1,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );
    const chatbotResponse = response.data.choices[0].text;
  
    messages.innerHTML +=   `<div class="bot-message">
                                <i class="fa-solid fa-robot"></i>
                                <span>${chatbotResponse}</span>
                             </div>`;
  });