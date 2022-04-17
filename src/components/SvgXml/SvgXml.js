import React from 'react';
import {SvgXml} from 'react-native-svg';

export default function SvgXmlString(props) {
  return <SvgXml {...props} xml={props.xml.toString()} />;
}
