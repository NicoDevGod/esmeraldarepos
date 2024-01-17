import Item from "./Item"
import {CALIDAD, NUESTROS, DELIVERY, PRECIOS} from "./Menus";

const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
        <Item Links={CALIDAD} title="CALIDAD"/>
        <Item Links={NUESTROS} title="NUESTROS QUEQUES"/>
        <Item Links={DELIVERY} title="DELIVERY"/>
        <Item Links={PRECIOS} title="PRECIOS"/>
    </div>
  )
}

export default ItemsContainer