import React from 'react';
import { Row, Col } from 'oah-ui';
import MdxContent from '../../mdx/guides/custom-component-style.mdx';
import SEO from '../../components/SEO';
import GuideStyle from '../../components/GuideStyle';

export default function CustomComponentStyle() {
  return (
    <Row>
      <SEO
        title="Custom Component Style"
        keywords={['OAH', 'application', 'react']}
      />
      <Col xs={12}>
        <GuideStyle>
          <MdxContent />
        </GuideStyle>
      </Col>
    </Row>
  );
}