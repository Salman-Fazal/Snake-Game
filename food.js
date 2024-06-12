import { onSnake, expandSnake } from './game.js'
import { randomGridPosition } from './grids.js'

// Initialize the food position with a random position not occupied by the snake.
let food = getRandomFoodPosition()
// Define the expansion rate of the snake when it eats food.
const EXPANSION_RATE = 2

export function update() {
      // Check if the snake has eaten the food
  if (onSnake(food)) {
        // Increase the length of the snake.
    expandSnake(EXPANSION_RATE)
    food = getRandomFoodPosition()
  }
}

export function draw(gameBoard) {
  const foodElement = document.createElement('div')
  foodElement.style.gridRowStart = food.y
  foodElement.style.gridColumnStart = food.x
  foodElement.classList.add('food')
  gameBoard.appendChild(foodElement)
}

function getRandomFoodPosition() {
  let newFoodPosition
  while (newFoodPosition == null || onSnake(newFoodPosition)) {
    newFoodPosition = randomGridPosition()
  }

  return newFoodPosition
}