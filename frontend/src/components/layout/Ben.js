import React, { Component } from "react";
import Avatar from "avataaars";

export class Ben extends Component {
  constructor(props) {
    super(props);
    this.style = {
      width: `${this.props.size}px`,
      height: `${this.props.size}px`
    } || {
      width: `100px`,
      height: `100px`
    };
    this.avatarStyle = this.props.avatarStyle || "Transparent";
    this.topType = this.props.topType || "ShortHairShortWaved";
    this.accessoriesType = this.props.accessoriesType || "Prescription02";
    this.hairColor = this.props.hairColor || "BrownDark";
    this.facialHairType = this.props.facialHairType || "Blank";
    this.clotheType = this.props.clotheType || "BlazerSweater";
    this.clotheColor = this.props.clotheColor || "PastelBlue";
    this.eyeType = this.props.eyeType || "Default";
    this.eyebrowType = this.props.eyebrowType || "Default";
    this.mouthType = this.props.mouthType || "Smile";
    this.skinColor = this.props.skinColor || "Light";
  }
  render() {
    const ben = {
      style: this.style,
      avatarStyle: this.avatarStyle,
      topType: this.topType,
      accessoriesType: this.accessoriesType,
      hairColor: this.hairColor,
      facialHairType: this.facialHairType,
      clotheType: this.clotheType,
      eyeType: this.eyeType,
      eyebrowType: this.eyebrowType,
      mouthType: this.mouthType,
      skinColor: this.skinColor
    };
    return <Avatar {...ben} />;
  }
}

export default Ben;
