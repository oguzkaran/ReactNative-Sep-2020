import React, {useState} from 'react';
import SwipeableButton from '../../components/SwipeableButton'

export default MainScreen = () => {
    const [items, setItems] = useState(
        new Array(10).fill(null).map((v, id) => ({id, name: "OK"}))
    )

    const onSwipe = id => () => setItems(items.filter(it => it.id != id))

    return (
        <>
            {
                items.map(item => (
                    <SwipeableButton key={item.id} onSwipe={onSwipe(item.id)} name={item.name} onPress={() => alert(`${item.name}-${item.id}`)}/>
                ))
            }
        </>
    )
}
