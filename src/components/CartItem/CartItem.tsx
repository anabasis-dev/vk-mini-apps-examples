import { FC, memo, useCallback } from 'react'
import { Icon24DeleteOutline } from '@vkontakte/icons'
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router'
import { OrderProduct } from 'src/types'
import { ShopPanel } from 'src/routes'
import { Counter, PriceDisplay } from 'src/components'
import { useAppDispatch } from 'src/store'
import { deleteCartItem, updateCartItem } from 'src/store/shoppingCart.reducer'

import './CartItem.css'

let CartItem: FC<OrderProduct> = ({
  id,
  name,
  price,
  preview,
  maxAvailable,
  numItemsToBuy,
}) => {
  const dispatch = useAppDispatch()
  const routeNavigator = useRouteNavigator()

  const onCancelClick = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation()
      dispatch(deleteCartItem(id))
    },
    [dispatch, id]
  )

  const onCounterChange = useCallback(
    (value: number) => dispatch(updateCartItem({ id, numItemsToBuy: value })),
    [id, dispatch]
  )
  const onItemClick = () => {
    routeNavigator.push(`/${ShopPanel.ProductInfo}?id=${id}`)
  }
  const onPreviewLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const el = e.target as HTMLElement
    el.classList.remove('CartItem_preview_image__unload')
  }

  return (
    <div onClick={onItemClick} className="CartItem">
      <div className="CartItem_preview">
        <picture>
          <source srcSet={preview + '.webp'} type="image/webp"></source>
          <img
            className="CartItem_preview_image CartItem_preview_image__unload"
            onLoad={onPreviewLoad}
            src={preview}
            alt=""
            width={120}
            height={120}
          />
        </picture>
      </div>

      <div className="CartItem_info">
        <div>
          <PriceDisplay
            price={price * numItemsToBuy}
            className="CartItem_info_price"
          />
          <div className="CartItem_info_name">{name}</div>
        </div>

        <div className="CartItem_info_controller">
          <Counter
            maxValue={maxAvailable}
            defaultValue={numItemsToBuy}
            minValue={1}
            onChange={onCounterChange}
          />

          <div
            onClick={onCancelClick}
            className="CartItem_info_controller_deleteButton"
          >
            <Icon24DeleteOutline />
            <div className="CartItem_info_controller_deleteButton_text">
              Удалить
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

CartItem = memo(CartItem)
export { CartItem }
