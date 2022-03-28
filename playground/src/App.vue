<script setup lang="ts">
import axle from '@/utils/axle'
import {$ref} from "vue/macros";

const getBlob = () => {
  axle
    .getBlob(
      'http://localhost:8000/getBlob',
      {},
      {
        onDownloadProgress: (e) => {
          console.log(e)
        },
      }
    )
    .then((res) => {
      axle.download(res.data as Blob, 'getBlob.png')
    })
}
const getStream = () => {
  axle.getStream('http://localhost:8000/getStream').then((res) => {
    console.log(res)
    // axle.download(res.data as Blob,'getBlob.png')
  })
}
const getArraybuffer = () => {
  axle.getArraybuffer('http://localhost:8000/getBlob').then((res) => {
    console.log(res)
  })
}
const get = () => {
  axle.get('http://localhost:8000/').then(({ data }) => {
    console.log(data)
  })

  axle.get('http://localhost:8000/withParams/1/axle').then(({ data }) => {
    console.log(data)
  })
  axle.get('http://localhost:8000/withQuery', { id: 1, name: 'axle' }).then(({ data }) => {
    console.log(data)
  })
}
const getDocument = () => {
  axle.getDocument('http://127.0.0.1:3000/index.html').then(({ data }) => {
    console.log(data)
  })
}
const getText = () => {
  axle.getText('http://127.0.0.1:3000/index.html').then(({ data }) => {
    console.log(data)
  })
}

const head = () => {
  axle.head('http://localhost:8000/').then((res) => {
    console.log(res)
  })
  axle.head('http://localhost:8000/withParams/1/axle').then((res) => {
    console.log(res)
  })
  axle.head('http://localhost:8000/withQuery', { id: 1, name: 'axle' }).then((res) => {
    console.log(res)
  })
}
const headBlob = () => {
  axle.headBlob('http://localhost:8000/getBlob').then((res) => {
    console.log(res)
  })
}
const headStream = () => {
  axle.headStream('http://localhost:8000/getStream').then((res) => {
    console.log(res)
  })
}
const headArraybuffer = () => {
  axle.headArraybuffer('http://localhost:8000/getBlob').then((res) => {
    console.log(res)
  })
}
const headDocument = () => {
  axle.headDocument('http://127.0.0.1:3000/index.html').then((res) => {
    console.log(res)
  })
}
const headText = () => {
  axle.headText('http://127.0.0.1:3000/index.html').then((res) => {
    console.log(res)
  })
}

const post = () => {
  axle.post('http://localhost:8000/', { age: 1, name: 'axle' }).then(({ data }) => {
    console.log(data)
  })
}
const postJSON = () => {
  axle.postJSON('http://localhost:8000/postJSON', { age: 1, name: 'axle' }).then(({ data }) => {
    console.log(data)
  })
}
const files = $ref([])
const postMultipart = (file) => {
  axle.postMultipart('http://localhost:8000/postMultipart',{
    file:file.file,
    name:'axle'
  }).then(({data})=>{
    console.log(data)
  })
}

const options = () => {
  axle.options('http://localhost:8000/').then((res) => {
    console.log(res)
  })
}
</script>

<template>
  <div class="app-container">
    <var-space direction="column">
      <var-button @click="get">get</var-button>
      <var-button @click="getBlob">getBlob</var-button>
      <var-button @click="getStream">getStream</var-button>
      <var-button @click="getArraybuffer">getArraybuffer</var-button>
      <var-button @click="getDocument">getDocument</var-button>
      <var-button @click="getText">getText</var-button>

      <var-button @click="head">head</var-button>
      <var-button @click="headBlob">headBlob</var-button>
      <var-button @click="headStream">headStream</var-button>
      <var-button @click="headArraybuffer">headArraybuffer</var-button>
      <var-button @click="headDocument">headDocument</var-button>
      <var-button @click="headText">headText</var-button>

      <var-button @click="post">post</var-button>
      <var-button @click="postJSON">postJSON</var-button>
      <var-uploader v-model="files" @after-read="postMultipart" :previewed="false" :hide-list="true">
        <var-button>postMultipart</var-button>
      </var-uploader>

      <var-button @click="options">options</var-button>
    </var-space>
  </div>
</template>

<style lang="less"></style>
