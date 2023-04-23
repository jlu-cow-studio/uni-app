const user =  [{
      title: '我的订单',
      path: '/compontents/order/order'
    },
    {
      title: '身份认证',
      path: '/compontents/sureRole/sureRole'
    },
    {
      title: '设置',
      path: '/compontents/setting/setting'
    }
  ]

const doctor = [{
      title: '发布推文',
      path: '/compontents/pubArticle/pubArticle'
    },{
      title: '我的推文',
      path: '/compontents/order/order'
    }, {
      title: '我的订单',
      path: '/compontents/order/order?id=my'
    },
    {
      title: '开启直播',
      path: '/compontents/open/open'
    },
    {
      title: '身份认证',
      path: '/compontents/sureRole/sureRole'
    },
    {
      title: '发布预约',
      path: '/compontents/pubOrder/pubOrder'
    },
    {
      title: '我的预约',
      path: '/compontents/myOrder/myOrder'
    },
    {
      title: '设置',
      path: '/compontents/setting/setting'
    }
  ]
const servicer = [{
      title: '发布商品',
      path: '/compontents/pubGoods/pubGoods?id=goods'
    },{
      title: '我的商品',
      path: '/compontents/myLike/myLike?id=my'
    }, {
      title: '我的订单',
      path: '/compontents/order/order'
    },
    {
      title: '身份认证',
      path: '/compontents/sureRole/sureRole'
    },
    {
      title: '设置',
      path: '/compontents/setting/setting'
    }
  ]
  
  const farmers = [{
        title: '发布商品',
        path: '/compontents/pubGoods/pubGoods'
      },{
        title: '我的商品',
        path: '/compontents/myLike/myLike?id=my'
      }, {
        title: '我的订单',
        path: '/compontents/order/order?id=my'
      },
      {
        title: '身份认证',
        path: '/compontents/sureRole/sureRole'
      },
      {
        title: '设置',
        path: '/compontents/setting/setting'
      }
    ]
    
    export  {
      farmers,
      servicer,
      doctor,
      user
    }