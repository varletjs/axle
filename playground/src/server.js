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

let count = 0

router.get('/user/list-user', async (ctx) => {
  await delay(300)
  response(ctx, 200, users)
})

router.get('/user/get-user', async (ctx) => {
  await delay(2000)

  const user = users.find((user) => user.id === Number(ctx.request.query.id))

  if (!user) {
    response(ctx, 404, null, 'not found this user')
    return
  }

  response(ctx, 200, user)
})

router.get('/user/throw-error', async (ctx) => {
  await delay(1000)

  count++

  if (count % 4 === 0) {
    response(ctx, 200, users[0])
    return
  }

  ctx.status = 500
})

router.get('/user/always-throw-error', async (ctx) => {
  await delay(1000)

  ctx.status = 500
})

router.post('/user/add-user', async (ctx) => {
  await delay(300)

  const user = {
    id: id++,
    name: ctx.request.body.name,
  }

  users.push(user)

  response(ctx, 200, user)
})

async function putOrPatch(ctx) {
  await delay(300)

  const user = users.find((user) => user.id === Number(ctx.request.body.id))
  if (!user) {
    response(ctx, 404, null, 'not found this user')
    return
  }

  user.name = ctx.request.body.name

  response(ctx, 200, user)
}

router.put('/user/update-user', putOrPatch)
router.patch('/user/patch-user', putOrPatch)

router.delete('/user/delete-user', async (ctx) => {
  await delay(300)

  const index = users.findIndex((user) => user.id === Number(ctx.request.query.id))

  if (index === -1) {
    response(ctx, 404, null, 'not found this user')
    return
  }

  const user = users[index]
  users.splice(index, 1)

  response(ctx, 200, user)
})

app.listen(8000)
