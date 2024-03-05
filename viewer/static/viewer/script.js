const categorySelect = document.querySelector('select[name="category"]');
const difficultySelect = document.querySelector('select[name="difficulty"]');
const quantityInput = document.querySelector('input[name="quantity"]');
const availableQuestionsElement = document.getElementById('available_questions');
const startGameButton = document.getElementById('start_game_button');

async function updateMaxQuestions() {
  const category = categorySelect.value;
  const difficulty = difficultySelect.value;

  try {
    const response = await fetch(`https://opentdb.com/api.php?amount=500&category=${category}&difficulty=${difficulty}`);
    const data = await response.json();

    const maxQuestions = data.results.length;

    availableQuestionsElement.textContent = maxQuestions;
    const enteredQuantity = parseInt(quantityInput.value);
    const isQuantityValid = !isNaN(enteredQuantity) && enteredQuantity <= maxQuestions;
    startGameButton.disabled = !isQuantityValid;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

categorySelect.addEventListener('change', updateMaxQuestions);
difficultySelect.addEventListener('change', updateMaxQuestions);
quantityInput.addEventListener('input', updateMaxQuestions);

updateMaxQuestions();

//
//<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 150" preserveAspectRatio="none">
//<defs>
//<style>
//	path {
//		fill: white;
//		stroke: #231F20;
//		stroke-width: 4;
//		stroke-linejoin: miter;
//		vector-effect: non-scaling-stroke;
//	}
//</style>
//</defs>
//<path d="M32.7,18.3c11,5,33.3,3.3,37-11.3 c11.7,8.7,40,11.3,54.7,0c7.3,10,36.7,13.3,46,0c0.3,8,29,16.7,39.3,11.7C202.3,27,212,40.7,229,42c-11.7,6-7.7,28.3,0,32.7 c-11,1-14.3,12.3-14.3,12.3l34.7,25.3l-12.7,2.3l36.7,21l-52.9-12.6l6.2-6.4l-28.3-16.3c0,0-14.7,14-14.3,19.3 c-10-5-36,3.7-44.3,13.3c-9.7-13.7-40.3-12.7-56-2c-7-10.3-37.7-11.7-48.7-10.7c7.2-9.7-9.3-31.7-27-35c14-5,19.7-34.3,6.7-40.7 C30.3,43.3,39.7,28,32.7,18.3z"/>
//</svg>
