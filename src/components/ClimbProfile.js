import React, {Component} from "react"

class ClimbProfile extends Component {
    constructor(props) {
      super(props);
      this.state = {
        hoverLoc: null,
        activePoint: null
      }
    }
    
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
        // https://stackoverflow.com/questions/4020796/finding-the-max-value-of-an-attribute-in-an-array-of-objects
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
      // (300 * 111) - (300 * 27) / (111 - 27)
    }
    
    // BUILD SVG PATH
    makePath() {
      const {coordinates} = this.props.item;
      const {svgHeight, svgWidth} = this.props;
      let pathD = `M 0 ${svgHeight} `  // Start path on bottom left corner 
      pathD += coordinates.map((point) => { // Continue path with all points
        return `L ${this.getSvgX(point.x)} ${this.getSvgY(point.y)} `;
      }).join(' '); // remove default comma's in .map
      pathD += `L ${svgWidth} ${svgHeight}` // End path in bottom right corner  
      
      return (
        <path className="c-profile__path" d={pathD} />
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

    // FIND CLOSEST POINT TO MOUSE
    getCoords(e){
      const {coordinates} = this.props.item;
      const {svgWidth} = this.props;
      const svgLocation = document.getElementsByClassName("c-profile__svg")[0].getBoundingClientRect();
      const svgScreenWidth = svgLocation.width;      
      const relativeLoc = e.clientX - svgLocation.left; // Compensate if svg has margin or is not full bleed
      const hoverScreenLoc = this.state.hoverLoc * svgWidth / svgScreenWidth
  
      let svgData = [];
      coordinates.map((point) => {
        svgData.push({
          svgX: this.getSvgX(point.x),
          svgY: this.getSvgY(point.y)
        });
      });
     
      let closestPoint = {};
      for(let i = 0, c = 500; i < svgData.length; i++){
        if ( Math.abs(svgData[i].svgX - hoverScreenLoc ) <= c ){
          c = Math.abs(svgData[i].svgX - hoverScreenLoc );
          closestPoint = svgData[i];
        }
      }
  
      if(relativeLoc < 0){
        this.stopHover();
      } else {
        this.setState({
          hoverLoc: relativeLoc,
          activePoint: closestPoint,
          datas: svgData
        })
      }
    }

    // STOP HOVER
    stopHover(){
      this.setState({hoverLoc: null, activePoint: null});
    }

    // MAKE ACTIVE POINT
    makeActivePoint(){
      const {pointRadius} = this.props;
      return (
        <React.Fragment>
          <circle
            className='c-profile__point'
            r={pointRadius}
            cx={this.state.activePoint.svgX}
            cy={this.state.activePoint.svgY}
          />
        </React.Fragment>
      );
    }

    makeActiveLabel(){
      const {coordinates} = this.props.item;
      const {svgWidth} = this.props;
      const {hoverLoc, activePoint} = this.state;
      const svgScreenWidth = document.getElementsByClassName("c-profile__svg")[0].getBoundingClientRect().width;
          
      let placementStyles = {};   
      placementStyles.left = (activePoint.svgX / svgWidth * svgScreenWidth);
      placementStyles.top = (activePoint.svgY / svgWidth * svgScreenWidth) - 70;     

      let svgDataX = [];
      coordinates.map((point) => {
        svgDataX.push(
          point.x / this.getX().max * svgScreenWidth
        );
      });
      
      const closestValue = svgDataX.reduce((a, b) => {  // Match closest value in array to Hoverloc
        return Math.abs(b - hoverLoc) < Math.abs(a - hoverLoc) ? b : a;
      });
      
      const closestIndex = svgDataX.indexOf(closestValue)  // Get Index of this value in array 
      
      return (
        (closestIndex < coordinates.length-1) 
        ? 
        <React.Fragment>
          <span
            className='c-profile__label c-profile__label--active'
            style={placementStyles}
          >
            <i className="c-icon c-icon--elevation-gain"/>{coordinates[closestIndex].elev}%
          </span>
        </React.Fragment>
        :
          ''
      );
    }

    makeActiveElev(){
      const {coordinates} = this.props.item;
      const {svgHeight} = this.props;
      const {hoverLoc} = this.state;
      const svgScreenWidth = document.getElementsByClassName("c-profile__svg")[0].getBoundingClientRect().width;

      let svgDataX = [];
      coordinates.map((point) => {
        svgDataX.push(
          point.x / this.getX().max * svgScreenWidth
        );
      });
      
      const closestValue = svgDataX.reduce((a, b) => {  // Match closest value in array to Hoverloc
        return Math.abs(b - hoverLoc) < Math.abs(a - hoverLoc) ? b : a;
      });
      
      const closestIndex = svgDataX.indexOf(closestValue)  // Get Index of this value in array 

      let pathD;
      if (closestIndex < coordinates.length-1) {
        pathD = "M " + this.getSvgX(coordinates[closestIndex].x) + " " + svgHeight + " " 
          + "L " + this.getSvgX(coordinates[closestIndex].x) + " " + this.getSvgY(coordinates[closestIndex].y) + " "
          + "L "  +  this.getSvgX(coordinates[closestIndex+1].x) + " " + this.getSvgY(coordinates[closestIndex+1].y) + " "
          + "L " + this.getSvgX(coordinates[closestIndex+1].x) + " " + svgHeight + " "
      }

      return (
        <React.Fragment>
          <path className="c-profile__elev" d={pathD} />
        </React.Fragment>
      );
    }

    // MAKE HOVER LINE
    createLine(){
      const {svgHeight, svgWidth} = this.props;
      const {hoverLoc} = this.state;
      const svgScreenWidth = document.getElementsByClassName("c-profile__svg")[0].getBoundingClientRect().width;      
      const hoverScreenLoc = hoverLoc * svgWidth / svgScreenWidth
      
      return (
        <line className='c-profile__line'
          x1={hoverScreenLoc} y1={-2000}
          x2={hoverScreenLoc} y2={svgHeight} 
          stroke='white'
          strokeDasharray='6 10'
          strokeLinecap='round'
        />
      )
    }

    makeLabels(){
      return(
        <React.Fragment>
          <span className="c-profile__label c-profile__label--start">{`${this.getY().min}m`}</span>
          <span className="c-profile__label c-profile__label--end ">{`${this.getY().max}m`}</span>
        </React.Fragment>
      )
    }
  
    render() {
      const {svgHeight, svgWidth} = this.props;
      return (
        <div className={'c-profile'}>
          {this.state.hoverLoc ? this.makeActiveLabel() : null}
          <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`}
                onMouseLeave={ () => this.stopHover() }
                onMouseMove={ (e) => this.getCoords(e) } 
                overflow={'visible'}
                className={'c-profile__svg'} >
            <g>
              {this.makePath()}
              {this.state.hoverLoc ? this.makeActiveElev() : null}
              {this.makeShadowPath()}
              {this.state.hoverLoc ? this.makeActivePoint() : null}
              {this.state.hoverLoc ? this.createLine() : null}
            </g>
          </svg>
          {this.makeLabels()}
        </div>
      );
    }
  }

  // DEFAULT PROPS
  ClimbProfile.defaultProps = {
    coordinates: [],
    pointRadius: 3,
    svgHeight: 300,
    svgWidth: 900,
    xLabelSize: 20,
    yLabelSize: 80
  }
  
  export default ClimbProfile;