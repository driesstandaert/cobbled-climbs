import React, {Component} from "react"

class ClimbCardProfile extends Component {
    
    // GET X & Y || MAX & MIN
    getX(){
      const {coordinates} = this.props.item;
      return {
        min: coordinates[0].x,
        max: coordinates[coordinates.length - 1].x
      }
    }
    getY(){
      const {coordinates} = this.props.item;
      return {
        min: coordinates.reduce((min, p) => p.y < min ? p.y : min, coordinates[0].y),
        max: coordinates.reduce((max, p) => p.y > max ? p.y : max, coordinates[0].y)
      }
    }

    // GET SVG COORDINATES
    getSvgX(x) {
      const {svgWidth} = this.props;
      return (x / this.getX().max * svgWidth);  
    }
    getSvgY(y) {
      const {svgHeight} = this.props;
      const gY = this.getY();
      return (svgHeight * gY.max - svgHeight * y) / (gY.max - gY.min);
    }
    
    // BUILD SVG PATH
    makePath() {
      const {coordinates} = this.props.item;
      const {svgHeight, svgWidth} = this.props;
      let pathD = `M 0 ${svgHeight} `
      pathD += coordinates.map((point) => {
        return `L ${this.getSvgX(point.x)} ${this.getSvgY(point.y)} `;
      }).join(' ');
      pathD += `L ${svgWidth} ${svgHeight}`
      
      return (
        <path className="c-profile__path" d={pathD} id="svg-helling" />
      );
    }

    makeShadowPath() {
      const {coordinates} = this.props.item;
      const {svgHeight, svgWidth} = this.props;
      let pathD = "M 0 " + svgHeight + " "   
      pathD += coordinates.map((point) => {
        return  "L " + this.getSvgX(point.x) + " " + this.getSvgY(point.y) + " "
        + "L " + this.getSvgX(point.x) + " " + svgHeight;
      }).join(' ');
      pathD += "L " + svgWidth + " " + svgHeight
    
      return (
        <path className="c-profile__shadow-path" d={pathD} />
      );
    }
  
    render() {
      const {svgHeight, svgWidth} = this.props;
      return (
        <div className={'c-profile'}>
          <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} 
                overflow={'visible'}
                className={'c-profile__svg'} >
            <g>
              {this.makePath()}
              {this.makeShadowPath()}
            </g>
          </svg>
        </div>
      );
    }
  }

  // DEFAULT PROPS
  ClimbCardProfile.defaultProps = {
    coordinates: [],
    svgHeight: 300,
    svgWidth: 900
  }
  
  export default ClimbCardProfile;