


$('.jsLogin').on('click', () => {
  sdk.login({
    el: $('.jsLoginContainer')[0],

    onSuccess(user) {
      console.log(user)

      $('.jsNick').html(`登录成功，用户为：${user.nickname}`)
    }
  })
})


$('.jsUserGet').on('click', async () => {
  try {

    const user = await sdk.getUserInfo()
    console.log(user)
  } catch (err) {
    console.error(err)
  }
})

$('.jsCreate').on('click', () => {
  sdk.create()
})