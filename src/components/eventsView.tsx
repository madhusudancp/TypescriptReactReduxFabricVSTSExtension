import * as React from 'react'
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { TextField } from "office-ui-fabric-react/lib-amd/TextField";
import { IAuthor } from '../models/models';

interface Props {
    createEvents: (value: IAuthor) => void
}
interface State {
  value: IAuthor
}

export default class EventsView extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {value:{firstName:'',title:'',id:'' }} // Value is empty by default
    this.onTitleChange=this.onTitleChange.bind(this);
    this.onClickSave=this.onClickSave.bind(this);
  }

  onTitleChange(ev){
    let event=this.state.value;
    event.title=ev.target.value;
    event.id=ev.target.value;
    console.log(event.title);
    this.setState({value:event});
  }

  onClickSave(){
      this.props.createEvents(this.state.value);
  }

  render() {
    const { value } = this.state
    
    return (
        <div className="row">
     
        <div className="col-sm-4">
            <input
              type="text"
              onChange={this.onTitleChange}
              value={this.state.value.title}
            />
        </div>
        <div className="col-sm-4">
            <PrimaryButton type='submit' onClick={this.onClickSave}>Submit</PrimaryButton>
        </div>


</div>  

    )
  }
}