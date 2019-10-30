import React from 'react';
import {CardElement, injectStripe, ReactStripeElements} from'react-stripe-elements';
//CardElement is displaying info for card. InjectStripe wraps component and injects

//stripe keeps everything secure in case someone accesses the api
//frontend key to tokenize cards -publishable

class Form extends React.Component<IformProps, IFormState>{
//initial props for form and state
  constructor(props: IFormProps) {
      super(props);
      this.state = {
          name: '',
          amount:''
      };
  }

//handles form refreshing page
//fetch post request to api route for stripe

  handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
      e.preventDefault();
      try{
          let token = await this.props.stripe.createToken({name: this.state.name})
      } catch(e) {
          throw e;
      }
  }



    render(){
        return(
       <main className='container'>
       <form 
            className='form-group mt-3 border border-primary rounded shadow-1g p-3'
            onSubmit={this.handleSubmit) 
        />
           <label>Name</label>
           <input
                type="text"
                className="input-group my-1 p-1 border border-dark"
                value={this.state.name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({name: else.target.value})}
      />
      <label>Amount</label>
      <input
                type="text"
                className="input-group my-1 p-1 border border-dark"
                value={this.state.amount}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({amount: else.target.value})}
     //updates state so value can be rerendered
                />
      <label>CC Number -- Exp. Date -- CVC</label>
      <CardElement className='p-2 border border-dark' />
      <button className="btn btn-primary border border-dark shadow">Donate</button>
      
      </form>
       
        );
    }
}

interface IFormProps extends ReactStripeElements.InjectedStripeProps { }

interface IFormState { 
    name: string;
    amount: string;
}

export default injectStripe(Form);
