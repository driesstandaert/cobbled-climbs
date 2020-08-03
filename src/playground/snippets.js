//// Pass state from child to parent, (if no redux)
// Parent
handleChildCallback(childValueObj) {
    this.setState({data:childValueObj.value});
    }
    
// Child
handleChange = (event) => {
    const childValue = event.target.value;
    this.props.ParentFunction({value:childValue});
 }