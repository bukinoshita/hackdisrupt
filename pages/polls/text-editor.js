'use strict'

import React from 'react'

import Poll from './../../layouts/poll'

export default () => {
  const options = [
    {
      vote:
        'https://m131jyck4m.execute-api.us-west-2.amazonaws.com/prod/poll/01BXCX6F6ZY0EFZTECF9MFKDAM/sublime%20text/vote',
      result:
        'https://m131jyck4m.execute-api.us-west-2.amazonaws.com/prod/poll/01BXCX6F6ZY0EFZTECF9MFKDAM/sublime%20text',
      alt: 'sublime-text'
    },
    {
      vote:
        'https://m131jyck4m.execute-api.us-west-2.amazonaws.com/prod/poll/01BXCX6F6ZY0EFZTECF9MFKDAM/vim/vote',
      result:
        'https://m131jyck4m.execute-api.us-west-2.amazonaws.com/prod/poll/01BXCX6F6ZY0EFZTECF9MFKDAM/vim',
      alt: 'vim'
    },
    {
      vote:
        'https://m131jyck4m.execute-api.us-west-2.amazonaws.com/prod/poll/01BXCX6F6ZY0EFZTECF9MFKDAM/brackets/vote',
      result:
        'https://m131jyck4m.execute-api.us-west-2.amazonaws.com/prod/poll/01BXCX6F6ZY0EFZTECF9MFKDAM/brackets',
      alt: 'brackets'
    },
    {
      vote:
        'https://m131jyck4m.execute-api.us-west-2.amazonaws.com/prod/poll/01BXCX6F6ZY0EFZTECF9MFKDAM/atom/vote',
      result:
        'https://m131jyck4m.execute-api.us-west-2.amazonaws.com/prod/poll/01BXCX6F6ZY0EFZTECF9MFKDAM/atom',
      alt: 'atom'
    },
    {
      vote:
        'https://m131jyck4m.execute-api.us-west-2.amazonaws.com/prod/poll/01BXCX6F6ZY0EFZTECF9MFKDAM/visual%20studio%20code/vote',
      result:
        'https://m131jyck4m.execute-api.us-west-2.amazonaws.com/prod/poll/01BXCX6F6ZY0EFZTECF9MFKDAM/visual%20studio%20code',
      alt: 'visual-studio-code'
    }
  ]

  return (
    <Poll
      title="Qual é o seu editor de texto favorito?"
      description="Queremos saber qual é o seu editor de texto favorito."
      options={options}
    />
  )
}
