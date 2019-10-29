import React from 'react';
import {CardElement, injectStripe, ReactStripeElements} from'react-stripe-elements';

class Form extends React.Component<IformProps, IFormState>{

  constructor(props: IFormProps) {
      super(props);
      this.state = {
          name: ''
      }
  }




    render(){
        return(
       <main className='container'>
       <form className='form-group mt-3 border border-primary rounded shadow-1g'>
           <label>Name</label>
           <input
                type="text"
                className="inpuut-group my-1 p-1 border border-dark"
                value={this.state.name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({name: else.target.value})}
      />
       </form>
       </main>
        );
    }
}

interface IFormProps { }
interface IFormState { 
    name: string;
}

export default injectStripe(Form);
