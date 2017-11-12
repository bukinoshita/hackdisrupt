'use strict'

import React, { Component } from 'react'
import Input from 'hackdisrupt-ui/build/input'
import Button from 'hackdisrupt-ui/build/button'
import axios from 'axios'
import { colors, typography } from './../../theme'
import Page from './../../layouts/page'
import Row from './../../ui/row'
import Hero from './../../components/hero'
import Header from './../../components/header'
import { getCookie } from './../../services/cookies'

class PollNew extends Component {
  constructor() {
    super()

    this.addOption = this.addOption.bind(this)
    this.createPoll = this.createPoll.bind(this)
    this.inputChange = this.inputChange.bind(this)
    this.inputChangeOptions = this.inputChangeOptions.bind(this)

    this.state = {
      options: [{ index: 0, value: '' }]
    }
  }

  addOption(e) {
    e.preventDefault()

    const { options } = this.state
    const newOption = options.concat({ index: options.length, value: '' })

    this.setState({ options: newOption })
  }

  createPoll(event) {
    event.preventDefault()

    const token = getCookie('hackdisrupt')
    const { title, description, options } = this.state
    const data = {
      title,
      description,
      options: options.map(option => option.value)
    }

    axios({
      url: `http://localhost:3001/poll`,
      method: 'post',
      headers: {
        Authorization: `[${process.env.API_TOKEN}, ${token}]`
      },
      withCredentials: true,
      data
    })
  }

  inputChange(event) {
    const { target } = event
    const { name, value } = target

    this.setState({ [name]: value })
  }

  inputChangeOptions(opt, index) {
    const { options } = this.state
    const option = opt.target.value
    options[index].value = option

    this.setState({ options })
  }

  render() {
    const { options } = this.state

    return (
      <Page>
        <Header />
        <Hero title="Poll" subtitle="Crie uma poll para votação" />

        <section>
          <Row size="600px">
            <form onSubmit={this.createPoll}>
              <Input
                name="title"
                label="Título"
                multiline={true}
                size="large"
                placeholder="Título da sua votação"
                inputRef="title"
                value={this.state.title}
                onChange={this.inputChange}
                autofocus={true}
              />

              <Input
                name="description"
                label="Descrição"
                multiline={true}
                size="medium"
                placeholder="Escreva uma pequena descrição sobre sua votação"
                value={this.state.description}
                onChange={this.inputChange}
              />

              <fieldset>
                <h4>Opções</h4>

                {options.map((option, index) => {
                  return (
                    <Input
                      key={`${option}${index + 1}`}
                      name={`option${index + 1}`}
                      label={`Opção ${index + 1}`}
                      placeholder={`Opção ${index + 1}`}
                      value={this.state.options[index].value}
                      onChange={opt => this.inputChangeOptions(opt, index)}
                    />
                  )
                })}

                <span onClick={this.addOption}>Adicionar uma nova opção</span>
              </fieldset>

              <fieldset className="form-actions">
                <Button type="submit">Criar votação</Button>
              </fieldset>
            </form>
          </Row>
        </section>

        <style jsx>{`
          form {
            padding-bottom: 100px;
          }

          fieldset {
            border: none;
          }

          span {
            color: ${colors.gainsboro};
            font-weight: ${typography.regular};
            font-size: ${typography.f12};
            cursor: pointer;
            transition: all 0.2s;
          }

          span:hover {
            color: ${colors.lightSlateGray};
          }

          h4 {
            font-weight: ${typography.semibold};
            font-size: ${typography.f14};
            margin-bottom: 20px;
          }

          .form-actions {
            padding-top: 50px;
            text-align: center;
          }
        `}</style>
      </Page>
    )
  }
}

export default PollNew
