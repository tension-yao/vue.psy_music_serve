const axios = require('axios')

const express = require('express')

const router = express.Router()

const headersA = {
  referer: 'https://c.y.qq.com/',
  host: 'c.y.qq.com'
}

const headersB = {
  referer: 'https://y.qq.com/',
  host: 'u.y.qq.com'
}

router.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*')

  next()
})

router.get('/recommendList', function (req, res) {
  const url = 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg'

  axios({
  	url,
  	params: req.query,
  	headers: headersA
  }).then(response => {
  	res.json(response.data)
  })
})

router.get('/songList', function (req, res) {
  const url = 'https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg'

  axios({
  	url,
  	params: req.query,
  	headers: headersA
  }).then(response => {
  	res.json(response.data)
  })
})

router.get('/singerList', function (req, res) {
  const url = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg'

  axios({
  	url,
  	params: req.query,
  	headers: headersA
  }).then(response => {
  	res.json(response.data)
  })
})

router.get('/singerDetail', function (req, res) {
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg'

  axios({
  	url,
  	params: req.query,
  	headers: headersA
  }).then(response => {
  	res.json(response.data)
  })
})

router.get('/topList', function (req, res) {
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg'

  axios({
  	url,
  	params: req.query,
  	headers: headersA
  }).then(response => {
  	res.json(response.data)
  })
})

router.get('/topListDetail', function (req, res) {
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg'

  axios({
  	url,
  	params: req.query,
  	headers: headersA
  }).then(response => {
  	res.json(response.data)
  })
})

router.get('/hotSearch', function (req, res) {
  const url = 'https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg'

  axios({
  	url,
  	params: req.query,
  	headers: headersA
  }).then(response => {
  	res.json(response.data)
  })
})

router.get('/searchResult', function (req, res) {
  const url = 'https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp'

  axios({
  	url,
  	params: req.query,
  	headers: headersA
  }).then(response => {
  	res.json(response.data)
  })
})

router.get('/lyric', function (req, res) {
  const url = 'https://c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric_yqq.fcg'

  axios({
  	url,
  	params: req.query,
  	headers: headersA
  }).then(response => {
  	res.json(response.data)
  })
})

router.get('/songURL', function (req, res) {
  const url = 'https://u.y.qq.com/cgi-bin/musicu.fcg'

  axios({
  	url,
  	params: req.query,
  	headers: headersB
  }).then(response => {
  	res.json(response.data)
  })
})

module.exports = router
