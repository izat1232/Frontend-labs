# Task 2 - Error Boundaries

Обработка ошибок в React с Error Boundary. Классовый компонент с retry функциональностью.

## Как запустить
1. `npm install`
2. `npm run dev`

## Компоненты
- `ErrorBoundary` - ловит ошибки в дочерних компонентах
- `ErrorFallback` - UI при ошибке
- `resetError` - функция для повторной попытки

## Функции
- Ловит ошибки рендеринга
- Показывает fallback UI
- Кнопка "Try Again" для retry
