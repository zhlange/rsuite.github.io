
import React from 'react';
import { Link } from 'react-router';
import { Container, Content, Row, Col } from '../../rsuiteSource';
import { Markdown } from 'react-markdown-reader';
import { SketchPicker, CirclePicker } from 'react-color';
import computeColors from './computeColors';
import ColorPanel from './ColorPanel';



class PalettePage extends React.Component {
  constructor() {
    super();
    this.state = {
      color: '#2196f3'
    };
  }
  handleChangeComplete = (color) => {
    this.setState({ color: color.hex });
  };

  render() {
    const { color } = this.state;
    return (
      <Content>
        <Row>
          <Col md={12}>
            <Markdown>
              {require('./readme.md')}
            </Markdown>
          </Col>
        </Row>

        <Row>
          <Col md={3}>
            <CirclePicker
              color={color}
              onChangeComplete={this.handleChangeComplete}
            />
            <hr />
            <SketchPicker
              color={color}
              onChangeComplete={this.handleChangeComplete}
            />

          </Col>
          <Col md={6} className="panel-color-wrap">
            <ColorPanel colors={computeColors(color)} />
          </Col>

        </Row>
      </Content>
    );
  }
}

export default PalettePage;
