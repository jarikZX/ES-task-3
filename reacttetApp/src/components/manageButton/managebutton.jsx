export function CreateCardbutton ({onClick, showComp}) {
  return ( 
        <button  onClick={onClick}>
            {showComp ? 'Скрыть создание компетенции': 'Открыть создание компетенции'}
        </button>
    )
}

export function SaveCardbutton ({onClick}) {

  return ( 
        <button  onClick={onClick}>
            Сохранить
        </button>
    )
}