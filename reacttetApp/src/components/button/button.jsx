export function CompetenceButton ({onClick, showComp}) {
    return (
        <button  onClick={onClick}>
            {showComp ? 'Убрать компетенции': 'Показать все компетенции'}
        </button>
    )
}
export function CompetenceButtonMore ({onClick,showComp}) {
    return (
        <button  onClick={onClick}>
            {showComp ? 'Скрыть': 'Показать > 50%'}
        </button>
    )
}
export function CompetenceButtonLess ({onClick, showComp}) {
    
  return ( 
        <button  onClick={onClick}>
            {showComp ? 'Скрыть': 'Показать < 50%'}
        </button>
    )
}