import {Component} from 'react'

import {
  BackgroundContainer,
  InputContainer,
  Heading,
  Container,
  Button,
  InputElement,
  Para,
} from './styledComponents'

class EditableText extends Component {
  state = {inputValue: '', isInput: true}

  onChangeInput = event => {
    this.setState({inputValue: event.target.value})
  }

  returnElement = () => {
    const {inputValue, isInput} = this.state
    if (isInput === true) {
      return <InputElement value={inputValue} onChange={this.onChangeInput} />
    }
    return <Para>{inputValue}</Para>
  }

  onClickButton = () => {
    this.setState(prevState => ({isInput: !prevState.isInput}))
  }

  render() {
    const {isInput} = this.state
    const ButtonText = isInput === true ? 'Save' : 'Edit'
    return (
      <BackgroundContainer>
        <InputContainer>
          <Heading>Editable Text Input</Heading>
          <Container>
            {this.returnElement()}
            <Button type="button" onClick={this.onClickButton}>
              {ButtonText}
            </Button>
          </Container>
        </InputContainer>
      </BackgroundContainer>
    )
  }
}

export default EditableText
