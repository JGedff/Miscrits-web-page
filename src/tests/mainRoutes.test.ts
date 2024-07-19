import request from 'supertest'
import { app } from '../index'

describe('Test main routes', () => {
  it.each`
  page              | title
  ${'/'}            | ${'Inicio'}
  ${'/locations'}   | ${'Ubicaciones'}
  ${'/elementums'}  | ${'Elementum'}
  ${'/creatures'}   | ${'Criaturas'}
  ${'/npcs'}        | ${'NPCs'}
  ${'/unknown'}     | ${'Pagina no encontrada'}
  `('verifies that the route "$page" has the title "$title"', async ({ page, title }: { page: string, title: string }) => {
    const res = await request(app).get(page)
    expect(res.text).toContain(title)
  })
})