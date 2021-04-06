import React, {useState} from 'react';
import Swipeable from '../Swipeable'

export default MainScreen = () => {
    const [items, setItems] = useState(
        new Array(10).fill(null).map((v, id) => ({id, name: "OK"}))
    )

    const onSwipe = id => () => setItems(items.filter(it => it.id != id))

    return (
        <>
            {
                items.map(it => (
                    <Swipeable key={it.id} onSwipe={onSwipe(it.id)} name={it.name}/>
                ))
            }
        </>
    )
}
