const Koa = require('koa')
const Router = require('koa-router')
const cors = require('koa-cors')
const fs = require('fs')
const path = require('path')
const app = new Koa()
const koaBody = require('koa-body')

app.use(cors())

const router = new Router()

router.get('/upload/:url', (ctx) => {
  ctx.body = fs.readFileSync(path.resolve(__dirname, `../upload/${ctx.params.url}`))
})

router.get('/', (ctx) => {
  ctx.body = {
    code: '200',
    data: 'Hello axle!',
  }
})

router.get('/withParams/:code/:name', (ctx) => {
  ctx.body = {
    code: '200',
    data: ctx.params,
    message: 'you params all in data',
  }
})

router.get('/withQuery', (ctx) => {
  ctx.body = {
    code: '200',
    data: ctx.query,
    message: 'you queries all in data',
  }
})

router.get('/getBlob', async (ctx) => {
  ctx.body = fs.readFileSync(path.resolve(__dirname, './assets/logo.png'))
})

router.get('/getStream', async (ctx) => {
  ctx.body = fs.createReadStream(path.resolve(__dirname, './assets/logo.png'))
})

router.head('/', (ctx) => {
  ctx.body = {
    code: '200',
    data: 'Hello axle!',
  }
})

router.head('/withParams/:code/:name', (ctx) => {
  ctx.body = {
    code: '200',
    data: ctx.params,
    message: 'you params all in data',
  }
})

router.head('/withQuery', (ctx) => {
  ctx.body = {
    code: '200',
    data: ctx.query,
    message: 'you queries all in data',
  }
})

router.head('/getBlob', async (ctx) => {
  ctx.body = fs.readFileSync(path.resolve(__dirname, './assets/logo.png'))
})

router.post('/', (ctx) => {
  ctx.body = {
    code: 200,
    data: ctx.request.body,
    message: 'your posted data all in data',
  }
})
router.post('/postJSON', (ctx) => {
  ctx.body = {
    code: 200,
    data: ctx.request.body,
    message: 'your posted data all in data',
  }
})
router.post('/postMultipart', (ctx) => {
  ctx.body = {
    code: 200,
    data: {
      url: `/upload/${ctx.request.files.file.name}`,
      ...ctx.request.body,
    },
    message: 'your posted data all in data',
  }
})

app.use(
  koaBody({
    multipart: true,
    formidable: {
      uploadDir: path.join(__dirname, '../upload/'),
      keepExtensions: true,
      onFileBegin: (name, file) => {
        const fileName = file.name.replaceAll(' ', '_').replace(/[`~!@#$%^&*()|\-=?;:'",<>\{\}\\\/]/gi, '_')
        file.name = fileName
        // 覆盖文件存放的完整路径(保留原始名称)
        file.path = `${path.join(__dirname, '../upload/')}${fileName}`
      },
    },
  })
)

app.use(router.routes()).use(router.allowedMethods())

app.use(async (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', '*')
  ctx.set(
    'Access-Control-Allow-Headers',
    'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild'
  )
  ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS, PATCH')
  if (ctx.method == 'OPTIONS') {
    ctx.body = 200
  } else {
    await next()
  }
})

app.listen('8000', () => {
  console.log('server start succeed at: 127.0.0.1:8000')
})
