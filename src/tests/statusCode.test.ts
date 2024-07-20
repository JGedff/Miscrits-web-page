import request from 'supertest'
import { app } from '../index'

describe('Test the status code for all routes', () => {
  it.each`
  page                                      | statusCode
  ${'/'}                                    | ${200}
  ${'/locations'}                           | ${200}
  ${'/locations/66979d5b29c2d2692fa7d867'}  | ${200}
  ${'/locations/669797ea29c2d29999999999'}  | ${404}
  ${'/locations/aaa'}                       | ${404}
  ${'/elementums'}                          | ${200}
  ${'/elementums/66979bcb29c2d2692fa7d854'} | ${200}
  ${'/elementums/669797ea29c2d29999999999'} | ${404}
  ${'/elementums/aaa'}                      | ${404}
  ${'/creatures'}                           | ${200}
  ${'/creatures/66979b4929c2d2692fa7d851'}  | ${200}
  ${'/creatures/669797ea29c2d29999999999'}  | ${404}
  ${'/creatures/aaa'}                       | ${404}
  ${'/npcs'}                                | ${200}
  ${'/npcs/669797ea29c2d2692fa7d835'}       | ${200}
  ${'/npcs/669797ea29c2d29999999999'}       | ${404}
  ${'/npcs/aaa'}                            | ${404}
  ${'/unknown'}                             | ${404}
  `('verifies that the route "$page" has the status code "$statusCode"', async ({ page, statusCode }: { page: string, statusCode: number }) => {
    const res = await request(app).get(page)
    expect(res.statusCode).toBe(statusCode)
  })
})