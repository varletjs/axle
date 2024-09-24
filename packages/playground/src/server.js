import Koa from 'koa'
import Router from 'koa-router'
import bodyParser from 'koa-bodyparser'

const app = new Koa()
const router = new Router()

app.use(bodyParser()).use(router.routes()).use(router.allowedMethods())

function delay(time = 0) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, time)
  })
}

function response(ctx, code, data, message = 'success') {
  ctx.body = {
    code,
    data,
    message,
  }
}

let id = 1

const users = [
  {
    id: id++,
    name: 'Jack Ma',
  },
  {
    id: id++,
    name: 'Tom',
  },
]

router.get('/user', async (ctx) => {
  await delay(100)
  response(ctx, 200, users)
})

router.get('/user/:id', async (ctx) => {
  await delay(100)

  const user = users.find((user) => user.id === Number(ctx.request.params.id))

  if (!user) {
    response(ctx, 404, null, 'not found this user')
    return
  }

  response(ctx, 200, user)
})

router.post('/user', async (ctx) => {
  await delay(100)

  const user = {
    id: id++,
    name: ctx.request.body.name,
  }

  users.push(user)

  response(ctx, 200, user)
})

router.put('/user/:id', async (ctx) => {
  await delay(100)

  const user = users.find((user) => user.id === Number(ctx.request.params.id))
  if (!user) {
    response(ctx, 404, null, 'not found this user')
    return
  }

  user.name = ctx.request.body.name

  response(ctx, 200, user)
})

router.delete('/user/:id', async (ctx) => {
  await delay(100)

  const index = users.findIndex((user) => user.id === Number(ctx.request.params.id))

  if (index === -1) {
    response(ctx, 404, null, 'not found this user')
    return
  }

  const user = users[index]
  users.splice(index, 1)

  response(ctx, 200, user)
})

app.listen(8000)
