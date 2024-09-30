// script.js
document.addEventListener('DOMContentLoaded', () => {
    const gameTextElement = document.getElementById('game-text');
    let gameText = gameTextElement.innerText;

    gameTextElement.addEventListener('click', () => {
        // Удаляем первую букву
        gameText = gameText.substring(1);
        
        // Обновляем текст в элементе
        if (gameText.length > 0) {
            gameTextElement.innerText = gameText;
        } else {
            gameTextElement.innerText = 'Все буквы удалены!';
            gameTextElement.style.cursor = 'default'; // Убираем указатель-курсор
        }
    });
});
