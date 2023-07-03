import React, { useCallback, useEffect } from 'react'
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router'
import { CategoryCard, Navbar, PageHeader } from 'src/components'
import { NavIdProps, Panel } from '@vkontakte/vkui'
import { ViewingPanel } from 'src/routes'
import { useAppDispatch, useAppSelector } from 'src/store'
import { initialState, setProductFilters, setStore } from 'src/store/app'

import './CategoryList.css'

export const CategoryList: React.FC<NavIdProps> = (props) => {
  const routeNavigator = useRouteNavigator()
  const dispatch = useAppDispatch()
  const { categories, filters } = useAppSelector((state) => state.app)
  const onCategoryCardClick = useCallback(
    (id: number) => {
      dispatch(setProductFilters({ ...filters, categoryId: id.toString() }))
      routeNavigator.push(`/${ViewingPanel.Store}`)
    },
    [dispatch, routeNavigator, filters]
  )

  /** Возвращаем начальное состояние фильтров и сохраненных товаров */
  useEffect(() => {
    setTimeout(() => {
      dispatch(setProductFilters(initialState.filters))
      dispatch(setStore(initialState.store))
    }, 300)
  }, [dispatch])

  return (
    <Panel className="Panel__fullScreen" {...props}>
      <Navbar searchDisable>
        <PageHeader header="Категории" />
      </Navbar>
      
      <div className="CategoryList">
        <div className="CategoryList_grid">
          {categories.map((item) => {
            return (
              <CategoryCard
                productCount={item.productCount}
                name={item.name}
                key={item.id}
                onClick={() => onCategoryCardClick(item.id)}
              />
            )
          })}
        </div>
      </div>
    </Panel>
  )
}