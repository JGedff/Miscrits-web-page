import request from 'supertest'
import { app } from '../index'

describe('Test dynamic routes', () => {
  it.each`
  page                                      | title
  ${'/locations/66979d5b29c2d2692fa7d867'}  | ${'Miscrian Forest'}
  ${'/elementums/66979be929c2d2692fa7d855'} | ${'Elementum'}
  ${'/creatures/66979b8a29c2d2692fa7d852'}  | ${'Sparkupine'}
  ${'/npcs/669797ea29c2d2692fa7d835'}       | ${'Forest Explorer'}
  ${'/locations/669797ea29c2d29999999999'}  | ${'Esta ubicación no existe'}
  ${'/elementums/669797ea29c2d29999999999'} | ${'Este elementum no existe'}
  ${'/creatures/669797ea29c2d29999999999'}  | ${'Esta criatura no existe'}
  ${'/npcs/669797ea29c2d29999999999'}       | ${'Este NPC no existe'}
  `('verifies that the route "$page" has the title "$title"', async ({ page, title }: { page: string, title: string }) => {
    const res = await request(app).get(page)
    expect(res.text).toContain(title)
  })
})
